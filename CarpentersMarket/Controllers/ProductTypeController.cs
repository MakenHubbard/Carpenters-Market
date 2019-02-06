using CarpentersMarket.DataAccess;
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
    public class ProductTypeController : ControllerBase
    {
        private readonly ProductTypeStorage _storage;

        public ProductTypeController(IConfiguration config)
        {
            _storage = new ProductTypeStorage(config);
        }

        [HttpGet]
        public IActionResult GetAllProductTypes()
        {
            return Ok(_storage.GetAll());
        }

    }
}
