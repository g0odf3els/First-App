using Application.DTOs;
using MediatR;

namespace Application.Features.ActionHistory.Queries.GetActionHistoryPaged
{
    public sealed record GetBoardActionLogPagedQuery(Guid boardId, int Page = 1, int PageSize = 16)
        : IRequest<List<ActionLogDto>>;
}
