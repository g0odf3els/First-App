using Application.Contracts;
using Application.DTOs;
using AutoMapper;
using Domain.Entities;
using MediatR;

namespace Application.Features.CardLists.Commands.CreateCardListCommand
{
    public class CreateCardListCommandHandler : IRequestHandler<CreateCardListCommand, CardListDto>
    {
        private readonly IGenericRepository<CardList> _cardListRepository;
        private readonly IMapper _mapper;

        public CreateCardListCommandHandler(IMapper mapper, IGenericRepository<CardList> cardListRepository)
        {
            _cardListRepository = cardListRepository;
            _mapper = mapper;
        }

        public async Task<CardListDto> Handle(CreateCardListCommand request, CancellationToken cancellationToken)
        {
            var cardList = new CardList()
            {
                Name = request.Name
            };

            cardList = await _cardListRepository.AddAsync(cardList);
            return _mapper.Map<CardListDto>(cardList);
        }
    }
}
