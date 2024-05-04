using Application.DTOs;
using MediatR;

namespace Application.Features.ActionHistory.Queries.GetActionHistoryPaged
{
    public sealed record GetActionLogPagedQuery(int Page = 1, int PageSize = 16)
        : IRequest<List<ActionLogDto>>;
}
