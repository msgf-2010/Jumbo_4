using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Jumbo.data;
using Microsoft.Extensions.Configuration;
using Faker;

namespace Jumbo_1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        [Route("person")]
        [HttpGet]
        public Person GetPerson()
        {
            return new Person
            {
                FirstName = Name.First(),
                LastName = Name.Last(),
                Age = RandomNumber.Next(20, 80)
            };
        }

        private string _connectionString;

        public HomeController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        //public IActionResult Index()
        //{
        //    var repo = new PeopleRepository(_connectionString);
        //    return View(repo.GetPeople());
        //}

        [Route("addPerson")]
        [HttpPost]
        public IActionResult Add(Person person)
        {
            var repo = new PeopleRepository(_connectionString);
            repo.Add(person);
            return Redirect("/");
        }

        //public IActionResult Edit(int id)
        //{
        //    var repo = new PeopleRepository(_connectionString);
        //    var person = repo.GetById(id);
        //    return View(person);
        //}

        //[HttpPost]
        //public IActionResult Update(Person person)
        //{
        //    var repo = new PeopleRepository(_connectionString);
        //    repo.Update(person);
        //    return Redirect("/");
        //}

        //[HttpPost]
        //public IActionResult Delete(int id)
        //{
        //    var repo = new PeopleRepository(_connectionString);
        //    repo.Delete(id);
        //    return Redirect("/");

        //}
    }
}
