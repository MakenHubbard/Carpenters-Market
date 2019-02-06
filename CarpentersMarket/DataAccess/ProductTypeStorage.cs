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
    public class ProductTypeStorage
    {
        private readonly string ConnectionString;

        public ProductTypeStorage(IConfiguration config)
        {
            ConnectionString = config.GetSection("ConnectionString").Value;
        }

        // Api sqls

        public List<ProductTypes> GetAll()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Query<ProductTypes>(@"select * from ProductType");

                return result.ToList();
            }
        }

        public List<CarpentersBasedOnProduct> GetSelectedProducts()
        {
            using (var connection = new SqlConnection(ConnectionString))
            {
                connection.Open();

                var result = connection.Query<CarpentersBasedOnProduct>(@"select Title, Description, UsersId, ProductTypeId, Quantity, ImageUrl, FirstName, LastName from Product join Users on users.Id = product.UsersId where product.ProductTypeId = 3");

                return result.ToList();
            }
        }

    }
}
