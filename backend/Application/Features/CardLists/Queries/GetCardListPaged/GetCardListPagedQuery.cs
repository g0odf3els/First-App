using Application.DTOs;
using MediatR;

namespace Application.Features.CardLists.Queries.GetCardListPagedCommand
{
    public sealed record GetCardListPagedQuery(int Page = 1, int PageSize = 16) 
        : IRequest<List<CardListDto>>;
}
