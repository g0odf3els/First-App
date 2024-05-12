using Domain.Entities;
using Domain.Enums;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data.Context
{
    public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
    {
        public DbSet<Card> Cards { get; set; }
        public DbSet<Board> Boards { get; set; }
        public DbSet<CardList> CardLists { get; set; }
        public DbSet<ActionLog> ActionLogs { get; set; }
        public DbSet<PropertyLog> PropertyLogs { get; set; }

        static AppDbContext()
        {
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
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
                    CreationTime = DateTime.UtcNow
                };

                if (actionLog.EntityType != "Board")
                {
                    actionLog.BoardId = (Guid)entry.Property("BoardId").CurrentValue;
                }
                else
                {
                    actionLog.BoardId = (Guid)entry.Property("Id").CurrentValue;
                }

                switch (entry.State)
                {
                    case EntityState.Added:
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
                        break;

                    case EntityState.Modified:
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
                        break;

                    case EntityState.Deleted:
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
                        break;
                }
                actionLogs.Add(actionLog);
            }

            await ActionLogs.AddRangeAsync(actionLogs, cancellationToken);

            return await base.SaveChangesAsync(cancellationToken);
        }
    }
}
