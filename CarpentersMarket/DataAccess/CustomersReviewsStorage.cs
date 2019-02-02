using CarpentersMarket.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;

namespace CarpentersMarket.DataAccess
{
    public class CustomersReviewsStorage
    {
        private readonly string ConnectionString;

        public CustomersReviewsStorage(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }

        // Api calls below

        public List<CustomerReviews> GetAll()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Query<CustomerReviews>(@"select * from CustomerReviews");

                return result.ToList();
            }
        }
    }
}
