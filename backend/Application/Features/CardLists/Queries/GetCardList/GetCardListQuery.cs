using Application.DTOs;
using MediatR;

namespace Application.Features.CardLists.Queries.GetCardList
{
    public sealed record GetCardListQuery(Guid Id) : IRequest<CardListDto>;
}
