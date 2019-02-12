using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CarpentersMarket.DataAccess;
using CarpentersMarket.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace CarpentersMarket.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly ProductStorage _storage;

        public ProductsController(IConfiguration config)
        {
            _storage = new ProductStorage(config);
        }

        [HttpGet]
        public IActionResult GetAllUsers()
        {
            return Ok(_storage.GetAll());
        }

        [HttpPost]
        public void AddProduct([FromBody] Products product)
        {
            _storage.addNewProduct(product);
        }
    }
}
