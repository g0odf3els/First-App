using Domain.Enums;

namespace Application.DTOs
{
    public class CardDto
    {
        public Guid Id { get; set; }

        public Guid ListId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public DateTime DueDate { get; set; }

        public Priority Priority { get; set; }
    }
}
