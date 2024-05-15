using Application.DTOs;
using MediatR;

namespace Application.Features.ActionLog.Queries.GetBoardActionLogPaged
{
    public sealed record GetBoardActionLogPagedRequest(int Page = 1, int PageSize = 16)
        : IRequest<List<ActionLogDto>>;
}
