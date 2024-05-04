using Application.Contracts;
using Application.DTOs;
using Application.Features.CardLists.Queries.GetCardListPagedCommand;
using AutoMapper;
using Domain.Entities;
using MediatR;

namespace Application.Features.Cards.Queries.GetCardPaged
{
    public class GetCardPagedQueryHandler : IRequestHandler<GetCardPagedQuery, List<CardDto>>
    {
        private readonly IGenericRepository<Card> _cardRepository;
        private readonly IMapper _mapper;

        public GetCardPagedQueryHandler(IGenericRepository<Card> cardRepository, IMapper mapper)
        {
            _cardRepository = cardRepository;
            _mapper = mapper;
        }

        public async Task<List<CardDto>> Handle(GetCardPagedQuery request, CancellationToken cancellationToken)
        {
            var cardPaged = await _cardRepository.GetPagedReponseAsync(request.Page, request.PageSize);
            return _mapper.Map<List<CardDto>>(cardPaged);
        }
    }
}
