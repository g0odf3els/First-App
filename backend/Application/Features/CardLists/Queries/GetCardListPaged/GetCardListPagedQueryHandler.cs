using Application.Contracts;
using Application.DTOs;
using Application.Features.CardLists.Queries.GetCardListPagedCommand;
using AutoMapper;
using MediatR;

namespace Application.Features.CardLists.Queries.GetCardListPaged
{
    public class GetCardListPagedQueryHandler : IRequestHandler<GetCardListPagedQuery, List<CardListDto>>
    {
        private readonly ICardListRepository _cardListRepository;
        private readonly IMapper _mapper;
        public GetCardListPagedQueryHandler(IMapper mapper, ICardListRepository cardListRepository)
        {
            _cardListRepository = cardListRepository;
            _mapper = mapper;
        }

        public async Task<List<CardListDto>> Handle(GetCardListPagedQuery request, CancellationToken cancellationToken)
        {
            var cardListPaged = await _cardListRepository.GetCardListPagedWithCards(request.BoardId, request.Page, request.PageSize);
            return _mapper.Map<List<CardListDto>>(cardListPaged);
        }
    }
}
