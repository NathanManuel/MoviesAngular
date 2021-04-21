using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Project3.Models;

namespace Project3.Data
{
    public class Project3Context : DbContext
    {
        public Project3Context (DbContextOptions<Project3Context> options)
            : base(options)
        {
        }

        public DbSet<Project3.Models.Movie> Movie { get; set; }
    }
}
