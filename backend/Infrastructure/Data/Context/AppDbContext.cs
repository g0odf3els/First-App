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
            var list1 = new CardList { Name = "Urgent Tasks" };
            var list2 = new CardList { Name = "Long-term Goals" };

            modelBuilder.Entity<CardList>().HasData(list1, list2);

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

            modelBuilder.Entity<CardList>().HasData(urgentTasks, longTermGoals);
            base.OnModelCreating(modelBuilder);
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
