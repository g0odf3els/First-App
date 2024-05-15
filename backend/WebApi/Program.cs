using WebApi.Middleware;
using Infrastructure;
using Application;
using Infrastructure.Data.Context;
using Infrastructure.Data;

namespace WebApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddTransient<ExceptionHandlingMiddleware>();

            builder.Services.ConfigureInfrastructure(builder.Configuration);
            builder.Services.ConfigureApplication();

            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            string CORSOpenPolicy = "OpenCORSPolicy";
            builder.Services.AddCors(options =>
            {
                options.AddPolicy(
                  name: CORSOpenPolicy,
                  builder => {
                      builder.WithOrigins("*").AllowAnyHeader().AllowAnyMethod();
                  });
            });

            var app = builder.Build();

            using (var scope = app.Services.CreateScope())
            {
                var services = scope.ServiceProvider;

                var context = services.GetRequiredService<AppDbContext>();
                context.Database.EnsureCreated();
                DbInitializer.Initialize(context);
            }

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseAuthorization();

            app.MapControllers();

            app.UseMiddleware<ExceptionHandlingMiddleware>();
           
            app.UseCors(CORSOpenPolicy);

            app.Run();

        }
    }
}
    public partial class Program { }
