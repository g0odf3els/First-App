using Application.DTOs;
using MediatR;

namespace Application.Features.Cards.Queries.GetCard
{
    public sealed record GetCardQuery(Guid Id) : IRequest<CardDto>;
}
