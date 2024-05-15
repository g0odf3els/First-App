using Domain.Enums;
using MediatR;

namespace Application.Features.Cards.Commands.UpdateCard
{
    public sealed class UpdateCardCommand : IRequest<Unit>
    {
        public Guid CardId { get; set; }

        public Guid CardListId { get; set; }

        public string Name { get; set; }

        public string? Description { get; set; }

        public DateTime DueDate { get; set; }

        public Priority Priority { get; set; }
    }
}
