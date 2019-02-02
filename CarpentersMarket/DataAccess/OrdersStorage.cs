using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Dapper;
using System.Data.SqlClient;
using CarpentersMarket.Models;

namespace CarpentersMarket.DataAccess
{
    public class OrdersStorage
    {
        private readonly string ConnectionString;

        public OrdersStorage(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }

        // Api sql goes here, use ConnectionString for new SqlConnection

        public List<Orders> GetAll()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Query<Orders>(@"select * from Orders");

                return result.ToList();
            }
        }
    }
}
