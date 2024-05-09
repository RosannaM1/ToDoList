using Microsoft.EntityFrameworkCore;
using ToDoList.Context;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// crear variable para la cadena de conexion
var connectionString = builder.Configuration.GetConnectionString("Connection");
//registrar servicio para la conexion
builder.Services.AddDbContext<AppDbContext>(
    options => options.UseSqlServer(connectionString)
);

//cors
builder.Services.AddCors(options => options.AddPolicy("ApiCorsPolicy",
             builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()));

builder.Services.AddControllers();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors("ApiCorsPolicy");

app.MapControllers();

app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());

app.Run();
