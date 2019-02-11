using CarpentersMarket.DataAccess;
using CarpentersMarket.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarpentersMarket.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class OrdersController : ControllerBase
    {
        private readonly OrdersStorage _storage;

        public OrdersController(IConfiguration config)
        {
            _storage = new OrdersStorage(config);
        }

        //[HttpPost]
        //public void AddOrder([FromBody]  Orders order)
        //{
        //    return Ok(_storage.AddOrder(order));
        //}
    }
}
