using MediatR;

namespace Application.Features.Cards.Commands.DeleteCard
{
    public sealed record DeleteCardCommand(Guid Id) : IRequest<Unit>;
}
