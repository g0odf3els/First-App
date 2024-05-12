using Domain.Enums;

namespace Application.Features.Cards.Commands.UpdateCard
{
    public class UpdateCardRequest
    {
        public Guid CardListId { get; set; }

        public string Name { get; set; }

        public string? Description { get; set; }

        public DateTime DueTime { get; set; }

        public Priority Priority { get; set; }
    }
}
