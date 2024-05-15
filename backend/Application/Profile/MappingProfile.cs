using Application.DTOs;
using Application.Features.Boards.Commands.CreateBoard;
using Application.Features.Boards.Commands.UpdateBoard;
using Application.Features.CardLists.Commands.UpdateCardList;
using Application.Features.Cards.Commands.UpdateCard;
using Domain.Entities;

namespace Application.Profile
{
    public class MappingProfile : AutoMapper.Profile
    {
        public MappingProfile()
        {
            CreateMap<Board, BoardDto>();
            CreateMap<CreateBoardCommand, Board>();
            CreateMap<UpdateBoardCommand, Board>();
            CreateMap<CardList, CardListDto>();
            CreateMap<Card, CardDto>();
            CreateMap<UpdateCardListCommand, CardList>();
            CreateMap<UpdateCardCommand, Card>();
            CreateMap<ActionLog, ActionLogDto>();
            CreateMap<PropertyLog, PropertyLogDto>();
        }
    }
}
