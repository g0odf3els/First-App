using Domain.Common;
using Domain.Enums;

namespace Domain.Entities
{
    public class ActionLog : BaseEntity
    {
        public Guid EntityId { get; set; }
        public string EntityName { get; set; }
        public string EntityType { get; set; }
        public ActionType Action { get; set; }
        public DateTime Timestamp { get; set; }
        public IList<PropertyLog> AffectedProperties { get; set; } = new List<PropertyLog>();
    }
}
