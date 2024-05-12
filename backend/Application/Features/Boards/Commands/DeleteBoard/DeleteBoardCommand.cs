using MediatR;

namespace Application.Features.Boards.Commands.DeleteBoard
{
    public sealed record DeleteBoardCommand(Guid Id) : IRequest<Unit>;
}
