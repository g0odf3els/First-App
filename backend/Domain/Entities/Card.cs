using Domain.Common;
using Domain.Enums;

namespace Domain.Entities
{
    public class Card : BaseEntity
    {
        public Guid ListId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public DateTime DueDate { get; set; }

        public Priority Priority { get; set; }
    }
}
