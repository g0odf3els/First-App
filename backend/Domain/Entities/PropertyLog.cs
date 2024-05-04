using Domain.Common;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public class PropertyLog : BaseEntity
    {
        public Guid ActionLogId { get; set; }
        [ForeignKey("ActionLogId")]
        public string PropertyName { get; set; }
        public string? OldValue { get; set; }
        public string? NewValue { get; set; }
    }
}
