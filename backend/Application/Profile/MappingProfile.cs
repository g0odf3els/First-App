using Application.DTOs;
using Application.Features.CardLists.Commands.UpdateCardList;
using Domain.Entities;

namespace Application.Profile
{
    public class MappingProfile : AutoMapper.Profile
    {
        public MappingProfile()
        {
            CreateMap<CardList, CardListDto>();
            CreateMap<Card, CardDto>();
            CreateMap<UpdateCardListCommand, CardList>();
        }
    }
}
