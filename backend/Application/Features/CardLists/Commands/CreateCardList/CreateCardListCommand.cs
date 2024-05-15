using Application.DTOs;
using MediatR;

namespace Application.Features.CardLists.Commands.CreateCardListCommand
{
    public sealed record CreateCardListCommand(Guid BoardId, string Name) 
        : IRequest<CardListDto>;
}
