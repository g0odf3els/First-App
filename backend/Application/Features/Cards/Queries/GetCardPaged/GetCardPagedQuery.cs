using Application.DTOs;
using MediatR;

namespace Application.Features.Cards.Queries.GetCardPaged
{
    public sealed record GetCardPagedQuery(int Page = 1, int PageSize = 16)
        : IRequest<List<CardDto>>;
}
