using Domain.Enums;

namespace Application.DTOs
{
    public class ActionLogDto
    {
        public Guid EntityId { get; set; }
        public string EntityName { get; set; }
        public string EntityType { get; set; }
        public ActionType Action { get; set; }
        public DateTime CreationTime { get; set; }
        public IEnumerable<PropertyLogDto> AffectedProperties { get; set; }
    }
}
