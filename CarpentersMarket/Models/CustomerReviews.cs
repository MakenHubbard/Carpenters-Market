using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarpentersMarket.Models
{
    public class CustomerReviews
    {
        public int Id { get; set; }
        public int UsersId { get; set; }
        public int ProductId { get; set; }
        public string Review { get; set; }
    }
}
