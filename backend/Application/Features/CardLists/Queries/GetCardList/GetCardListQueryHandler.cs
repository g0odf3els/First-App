using Application.Contracts;
using Application.DTOs;
using AutoMapper;
using Domain.Exceptions;
using MediatR;

namespace Application.Features.CardLists.Queries.GetCardList
{
    public class GetCardListQueryHandler : IRequestHandler<GetCardListQuery, CardListDto>
    {
        private readonly ICardListRepository _cardListRepository;
        private readonly IMapper _mapper;

        public GetCardListQueryHandler(IMapper mapper, ICardListRepository cardListRepository)
        {
            _cardListRepository = cardListRepository;
            _mapper = mapper;
        }

        public async Task<CardListDto> Handle(GetCardListQuery request, CancellationToken cancellationToken)
        {
            var cardList = await _cardListRepository.GetCardListWithCards(request.Id);
            
            if(cardList == null)
            {
                throw new NotFoundException(request.Id.ToString());
            }

            return _mapper.Map<CardListDto>(cardList);
        }
    }
}
