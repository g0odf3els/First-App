using MediatR;

namespace Application.Features.CardLists.Commands.UpdateCardList
{
    public sealed record UpdateCardListCommand(Guid Id, string Name)
        : IRequest<Unit>;
}
