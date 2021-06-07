using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using PRS_Server.Models;

namespace PRS_Server.Data
{
    public class PRSContext : DbContext
    {
        public PRSContext (DbContextOptions<PRSContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Vendor> Vendors { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Request> Requests { get; set; }
        public DbSet<RequestLine> RequestLines { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<User>(u => {
                u.HasIndex(u => u.Username).IsUnique();
            });
            builder.Entity<Vendor>(v => {
                v.HasIndex(v => v.Code).IsUnique();
            });
            builder.Entity<Product>(p => {
                p.HasIndex(p => p.PartNbr).IsUnique();
            });
        }

    }
}
