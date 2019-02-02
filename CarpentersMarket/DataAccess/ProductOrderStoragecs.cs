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
    public class ProductOrderStorages
    {
        private readonly string ConnectionString;

        public ProductOrderStorages(IConfiguration config)
        {
            ConnectionString = config.GetSection(
                "ConnectionString").Value;
        }

        // Api Calls go here 

        public List<ProductOrders> GetAll()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Query<ProductOrders>(@"select * from ProductOrders");

                return result.ToList();
            }
        }

    }
}
