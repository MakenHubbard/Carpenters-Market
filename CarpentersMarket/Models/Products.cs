using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarpentersMarket.Models
{
    public class Products
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int UsersId { get; set; }
        public int ProductTypeId { get; set; }
        public int Quantity { get; set; }
        public string ImageUrl { get; set; }
    }
}
