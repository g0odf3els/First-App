using Application.DTOs;
using MediatR;

namespace Application.Features.Boards.Queries.GetBoard
{
    public sealed record GetBoardQuery(Guid Id) : IRequest<BoardDto>;
}
