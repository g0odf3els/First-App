using MediatR;

namespace Application.Features.Boards.Commands.UpdateBoard
{
    public sealed record UpdateBoardCommand(Guid Id, string Name) : IRequest<Unit>;
}
