using Microsoft.EntityFrameworkCore;
using System;
using ToDoList.Models;

namespace ToDoList.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Tarea> Tareas { get; set; }
    }
}

