using Application.DTOs;
using MediatR;

namespace Application.Features.Boards.Commands.CreateBoard
{
    public sealed record CreateBoardCommand(string Name) : IRequest<BoardDto>;
}
