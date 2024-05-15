using Application.DTOs;
using MediatR;

namespace Application.Features.ActionLog.Queries.GetCardActionLogPaged
{
    public sealed record GetCardActionLogPagedRequest(int Page = 1, int PageSize = 16)
        : IRequest<List<ActionLogDto>>;
}
