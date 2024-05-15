using Application.DTOs;
using MediatR;

namespace Application.Features.Boards.Queries.GetBoardPaged
{
    public sealed record GetBoardPagedQuery(int Page = 1, int PageSize = 16)
        : IRequest<List<BoardDto>>;
}
