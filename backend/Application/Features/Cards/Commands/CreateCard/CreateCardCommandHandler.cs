using Application.Contracts;
using Application.DTOs;
using AutoMapper;
using Domain.Entities;
using Domain.Exceptions;
using MediatR;

namespace Application.Features.Cards.Commands.CreateCard
{
    public class CreateCardCommandHandler : IRequestHandler<CreateCardCommand, CardDto>
    {
        private readonly IGenericRepository<CardList> _cardListRepository;
        private readonly IGenericRepository<Card> _cardRepository;
        private readonly IMapper _mapper;

        public CreateCardCommandHandler(IGenericRepository<CardList> cardListRepository, IGenericRepository<Card> cardRepository, IMapper mapper)
        {
            _cardListRepository = cardListRepository;
            _cardRepository = cardRepository;
            _mapper = mapper;
        }

        public async Task<CardDto> Handle(CreateCardCommand request, CancellationToken cancellationToken)
        {
            var cardList = await _cardListRepository.GetByIdAsync(request.CardListId);

            if (cardList == null)
            {
                throw new NotFoundException(request.CardListId.ToString());
            }

            var card = new Card()
            {
                CreationTime = DateTime.UtcNow,
                BoardId = cardList.BoardId,
                ListId = cardList.Id,
                Name = request.Name,
                Description = request.Description,
                DueDate = request.DueTime,
                Priority = request.Priority
            };

            await _cardRepository.AddAsync(card);

            return _mapper.Map<CardDto>(card);
        }
    }
}
