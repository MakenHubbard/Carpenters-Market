using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CarpentersMarket.DataAccess;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace CarpentersMarket.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UsersStorage _storage;

        public UsersController(IConfiguration config)
        {
            _storage = new UsersStorage(config);
        }

        [HttpGet]
        public IActionResult GetAllUsers ()
        {
            return Ok(_storage.GetAll());
        }
    }
}
