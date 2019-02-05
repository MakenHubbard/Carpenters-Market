using CarpentersMarket.Models;
using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace CarpentersMarket.DataAccess
{
    public class ProductStorage
    {
        private readonly string ConnectionString;

        public ProductStorage(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }

        // Api sql goes here, use ConnectionString for new SqlConnection

        public List<Products> GetAll()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Query<Products>(@"select * from Product");
                return result.ToList();
            }
            


          

        }

    }
}
