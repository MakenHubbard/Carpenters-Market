using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarpentersMarket.Models
{
    public class Users
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool isCarpenter { get; set; }
    }
}
