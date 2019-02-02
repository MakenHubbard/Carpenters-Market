using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarpentersMarket.Models
{
    public class ProductOrders
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int OrderId { get; set; }
    }
}
