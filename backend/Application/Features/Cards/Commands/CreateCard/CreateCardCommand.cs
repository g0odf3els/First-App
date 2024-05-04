using MediatR;
using Application.DTOs;
using Domain.Enums;

namespace Application.Features.Cards.Commands.CreateCard
{
    public sealed class CreateCardCommand : IRequest<CardDto>
    {
        public Guid CardListId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public DateTime DueTime { get; set; }

        public Priority Priority { get; set; }
    }
}
