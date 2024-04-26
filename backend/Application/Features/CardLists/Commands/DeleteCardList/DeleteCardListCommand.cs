using MediatR;

namespace Application.Features.CardLists.Commands.DeleteCardListCommand
{
    public sealed record DeleteCardListCommand(Guid Id) : IRequest<Unit>;
}
