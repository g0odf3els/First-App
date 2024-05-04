using Domain.Entities;
using Domain.Enums;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data.Context
{
    public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
    {
        public DbSet<Card> Cards { get; set; }
        public DbSet<CardList> CardLists { get; set; }
        public DbSet<ActionLog> ActionLogs { get; set; }
        public DbSet<PropertyLog> PropertyLogs { get; set; }

        static AppDbContext()
        {
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            CardList toDoList = new CardList
            {
                CreationTime = DateTime.Now.AddDays(7),
                Id = Guid.NewGuid(),
                Name = "To Do"
            };
            CardList InProcessList = new CardList
            {
                CreationTime = DateTime.Now.AddDays(10),
                Id = Guid.NewGuid(),
                Name = "In Process"
            };
            CardList FinishedList = new CardList
            {
                CreationTime = DateTime.Now.AddDays(12),
                Id = Guid.NewGuid(),
                Name = "Finished"
            };

            modelBuilder.Entity<CardList>().HasData([toDoList, InProcessList, FinishedList]);

            var todoTasks = new List<Card>
            {
                new Card
                {
                    Id = Guid.NewGuid(),
                    Name = "Setup email notification",
                    Description = "Configure email notification system for user alerts.",
                    DueDate = DateTime.Now.AddDays(7),
                    Priority = Priority.Medium,
                    ListId = toDoList.Id,
                },
                 new Card
                 {
                    Id = Guid.NewGuid(),
                    Name = "Design landing page",
                    Description = "Create a visually appealing landing page for the application.",
                    DueDate = DateTime.Now.AddDays(10),
                    Priority = Priority.High,
                    ListId = toDoList.Id,
                 },
                 new Card
                 {
                    Id = Guid.NewGuid(),
                    Name = "Write unit tests",
                    Description = "Implement unit tests for critical components of the system.",
                    DueDate = DateTime.Now.AddDays(3),
                    Priority = Priority.High,
                    ListId = toDoList.Id,
                },
                new Card
                {
                    Id = Guid.NewGuid(),
                    Name = "Refactor authentication logic",
                    Description = "Optimize authentication logic for better security.",
                    DueDate = DateTime.Now.AddDays(5),
                    Priority = Priority.Medium,
                    ListId = toDoList.Id,
                },
                new Card
                {
                    Id = Guid.NewGuid(),
                    Name = "Update documentation",
                    Description = "Update project documentation with recent changes and additions.",
                    DueDate = DateTime.Now.AddDays(2),
                    Priority = Priority.Low,
                    ListId = toDoList.Id,
                }
            };

            var inProcessTasks = new List<Card>
            {
                new Card
                {
                    Id = Guid.NewGuid(),
                    Name = "Implement file upload feature",
                    Description = "Develop functionality to allow users to upload files.",
                    DueDate = DateTime.Now.AddDays(7),
                    Priority = Priority.High,
                    ListId = InProcessList.Id,
                },
                new Card
                {
                    Id = Guid.NewGuid(),
                    Name = "Optimize database queries",
                    Description = "Improve database query performance by optimizing queries.",
                    DueDate = DateTime.Now.AddDays(4),
                    Priority = Priority.Medium,
                    ListId = InProcessList.Id,
                },
                new Card
                {
                    Id = Guid.NewGuid(),
                    Name = "Integrate third-party API",
                    Description = "Integrate a third-party API for geolocation services.",
                    DueDate = DateTime.Now.AddDays(6),
                    Priority = Priority.Medium,
                    ListId = InProcessList.Id,
                },
                new Card
                {
                    Id = Guid.NewGuid(),
                    Name = "Design user profile page",
                    Description = "Create a user profile page with customizable settings.",
                    DueDate = DateTime.Now.AddDays(8),
                    Priority = Priority.High,
                    ListId = InProcessList.Id,
                },
                new Card
                {
                    Id = Guid.NewGuid(),
                    Name = "Implement error logging",
                    Description = "Implement a system for logging errors and exceptions.",
                    DueDate = DateTime.Now.AddDays(3),
                    Priority = Priority.Medium,
                    ListId = InProcessList.Id,
                }
            };

            var finishedTasks = new List<Card>
            {
                new Card
                {
                    Id = Guid.NewGuid(),
                    Name = "Review code",
                    Description = "Perform code review to ensure quality and adherence to coding standards.",
                    DueDate = DateTime.Now.AddDays(-2),
                    Priority = Priority.Low,
                    ListId = FinishedList.Id,
                },
                new Card
                {
                    Id = Guid.NewGuid(),
                    Name = "Deploy to production",
                    Description = "Deploy the latest version of the application to the production server.",
                    DueDate = DateTime.Now.AddDays(-1),
                    Priority = Priority.High,
                    ListId = FinishedList.Id,
                }
            };
            modelBuilder.Entity<Card>().HasData(todoTasks);
            modelBuilder.Entity<Card>().HasData(inProcessTasks); 
            modelBuilder.Entity<Card>().HasData(finishedTasks);

        }

        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
        {
            var actionLogs = new List<ActionLog>();

            var entries = ChangeTracker.Entries()
                .Where(e => e.State == EntityState.Added ||
                            e.State == EntityState.Modified ||
                            e.State == EntityState.Deleted);

            foreach (var entry in entries)
            {
                var actionLog = new ActionLog
                {
                    EntityName = (string)entry.Property("Name").CurrentValue,
                    EntityId = (Guid)entry.Property("Id").CurrentValue,
                    EntityType = entry.Entity.GetType().Name,
                    Timestamp = DateTime.UtcNow
                };

                if (entry.State == EntityState.Added)
                {
                    actionLog.Action = ActionType.Added;

                    foreach (var property in entry.OriginalValues.Properties)
                    {
                        var originalValue = entry.OriginalValues[property]?.ToString();

                        if (property.Name == "ListId")
                        {
                            var oldList = CardLists.Find(new Guid(originalValue));

                            actionLog.AffectedProperties.Add(
                                new PropertyLog
                                {
                                    PropertyName = "ListName",
                                    NewValue = oldList?.Name,
                                });
                        }

                        actionLog.AffectedProperties.Add(
                            new PropertyLog
                            {
                                PropertyName = property.Name,
                                NewValue = originalValue,
                            });
                    }
                }
                else if (entry.State == EntityState.Modified)
                {
                    actionLog.Action = ActionType.Modified;

                    foreach (var property in entry.OriginalValues.Properties)
                    {
                        var originalValue = entry.OriginalValues[property]?.ToString();
                        var currentValue = entry.CurrentValues[property]?.ToString();

                        if (originalValue != currentValue)
                        {
                            if (property.Name == "ListId")
                            {
                                var oldList = CardLists.Find(new Guid(originalValue));
                                var newList = CardLists.Find(new Guid(currentValue));

                                actionLog.AffectedProperties.Add(new PropertyLog
                                {
                                    PropertyName = "ListName",
                                    OldValue = oldList?.Name,
                                    NewValue = newList?.Name,
                                });
                            }

                            actionLog.AffectedProperties.Add(
                                new PropertyLog
                                {
                                    PropertyName = property.Name,
                                    OldValue = originalValue,
                                    NewValue = currentValue,
                                });
                        }
                    }
                }
                else if (entry.State == EntityState.Deleted)
                {
                    actionLog.Action = ActionType.Deleted;

                    foreach (var property in entry.OriginalValues.Properties)
                    {
                        var originalValue = entry.OriginalValues[property]?.ToString();

                        if (property.Name == "ListId")
                        {
                            var oldList = CardLists.Find(new Guid(originalValue));

                            actionLog.AffectedProperties.Add(new PropertyLog
                            {
                                PropertyName = "ListName",
                                OldValue = oldList.Name,
                            });
                        }

                        actionLog.AffectedProperties.Add(new PropertyLog
                        {
                            PropertyName = property.Name,
                            OldValue = originalValue,
                        });
                    }
                }

                actionLogs.Add(actionLog);
            }

            await ActionLogs.AddRangeAsync(actionLogs, cancellationToken);

            return await base.SaveChangesAsync(cancellationToken);
        }
    }
}
