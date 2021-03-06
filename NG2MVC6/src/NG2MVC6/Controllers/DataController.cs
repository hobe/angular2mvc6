﻿using System;
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
            var result = new List<Person>();
            for (int i = 0; i < 50; i++)
            {
                result.Add(
                    new Person
                    {
                        DateOfBirth = DateTime.Now.AddDays(i),
                        FirstName = "First " + i,
                        LastName = "Last " + i,
                        Id = i
                    });
            };
            return result;
        }

    }
}
