using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using NG2MVC6.Model;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace NG2MVC6.Controllers
{
    [Route("api/[controller]")]
    public class DataController : Controller
    {
        // GET: api/values
        [HttpGet]
        public IEnumerable<Person> Get()
        {
            return new List<Person> {
                new Person
                {
                    DateOfBirth = DateTime.Now,
                    FirstName ="Bernhard",
                    LastName ="Hochgatterer",
                    Id = 1
                },
                new Person
                {
                    DateOfBirth = DateTime.Now,
                    FirstName ="Homer",
                    LastName ="Simpson",
                    Id = 2
                }
            };
        }

    }
}
