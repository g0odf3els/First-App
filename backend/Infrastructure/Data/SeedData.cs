using Domain.Entities;
using Domain.Enums;
using Infrastructure.Data.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Infrastructure.Data
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using var dbContext = new AppDbContext(
                serviceProvider.GetRequiredService<DbContextOptions<AppDbContext>>());

            if (dbContext.CardLists.Any())
            {
                return;
            }

            PopulateTestData(dbContext);
        }

        public static void PopulateTestData(AppDbContext dbContext)
        {
            var list1 = new CardList { Name = "Urgent Tasks" };
            var list2 = new CardList { Name = "Long-term Goals" };
            dbContext.Set<CardList>().Add(list1);
            dbContext.Set<CardList>().Add(list2);
            dbContext.SaveChangesAsync();

            var urgentTasks = new[]
            {
                new Card
                {
                    Name = "Finish Project Proposal",
                    Description = "Complete the proposal for upcoming project.",
                    DueDate = DateTime.Today.AddDays(3),
                    Priority = Priority.High,
                    ListId = list1.Id
                },
                new Card
                {
                    Name = "Prepare Presentation",
                    Description = "Prepare slides and materials for the presentation.",
                    DueDate = DateTime.Today.AddDays(2),
                    Priority = Priority.High,
                    ListId = list1.Id
                },
                new Card
                {
                    Name = "Schedule Meeting with Client",
                    Description = "Arrange a meeting with the client to discuss project details.",
                    DueDate = DateTime.Today.AddDays(1),
                    Priority = Priority.High,
                    ListId = list1.Id
                },
                new Card
                {
                    Name = "Review Code Changes",
                    Description = "Review and provide feedback on recent code changes.",
                    DueDate = DateTime.Today.AddDays(4),
                    Priority = Priority.Medium,
                    ListId = list1.Id
                },
                new Card
                {
                    Name = "Update Documentation",
                    Description = "Update project documentation with latest changes.",
                    DueDate = DateTime.Today.AddDays(5),
                    Priority = Priority.Medium,
                    ListId = list1.Id
                }
            };

            var longTermGoals = new[]
            {
                new Card
                {
                    Name = "Learn New Programming Language",
                    Description = "Start learning Python programming language.",
                    DueDate = DateTime.UtcNow.AddDays(30),
                    Priority = Priority.Low,
                    ListId = list2.Id
                },
                new Card
                {
                    Name = "Complete Online Course",
                    Description = "Finish the online course on machine learning.",
                    DueDate = DateTime.UtcNow.AddDays(45),
                    Priority = Priority.Low,
                    ListId = list2.Id
                },
                new Card
                {
                    Name = "Read 10 Books",
                    Description = "Set a goal to read 10 books this year.",
                    DueDate = DateTime.UtcNow.AddDays(365),
                    Priority = Priority.Medium,
                    ListId = list2.Id
                },
                new Card
                {
                    Name = "Travel to Europe",
                    Description = "Plan and save for a trip to Europe next summer.",
                    DueDate = DateTime.UtcNow.AddYears(1).AddMonths(6),
                    Priority = Priority.High,
                    ListId = list2.Id
                },
                new Card
                {
                    Name = "Start Personal Blog",
                    Description = "Begin writing and publishing articles on a personal blog.",
                    DueDate = DateTime.UtcNow.AddDays(7),
                    Priority = Priority.Medium,
                    ListId = list2.Id
                }
            };

            dbContext.Set<Card>().AddRangeAsync(urgentTasks);
            dbContext.Set<Card>().AddRangeAsync(longTermGoals);
            dbContext.SaveChangesAsync();
        }
    }
}
