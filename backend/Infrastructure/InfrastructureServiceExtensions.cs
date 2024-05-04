using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Infrastructure.Data.Context;
using Microsoft.EntityFrameworkCore;
using Infrastructure.Data.Repositories;
using Application.Contracts;

namespace Infrastructure
{
    public static class InfrastructureServiceExtensions
    {
        public static void ConfigureInfrastructure(this IServiceCollection services, ConfigurationManager configuration)
        {
            var connectionString = configuration["PostgresSQLConnection:ConnectionString"];

            services.AddDbContext<AppDbContext>(options =>
                options.UseNpgsql(connectionString));

            services.AddScoped(typeof(IGenericRepository<>), typeof(GenericRepository<>));

            services.AddScoped(typeof(ICardListRepository), typeof(CardListRepository));

            services.AddScoped(typeof(IActionLogRepository), typeof(ActionLogRepository));
        }
    }
}
