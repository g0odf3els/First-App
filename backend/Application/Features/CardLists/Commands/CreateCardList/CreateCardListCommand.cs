using Application.DTOs;
using MediatR;

namespace Application.Features.CardLists.Commands.CreateCardListCommand
{
    public sealed record CreateCardListCommand(string Name) 
        : IRequest<CardListDto>;
}
