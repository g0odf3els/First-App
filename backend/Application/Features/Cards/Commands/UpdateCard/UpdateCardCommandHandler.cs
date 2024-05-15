using Application.Contracts;
using AutoMapper;
using Domain.Entities;
using Domain.Exceptions;
using MediatR;
using System.ComponentModel.DataAnnotations;

namespace Application.Features.Cards.Commands.UpdateCard
{
    public class UpdateCardCommandHandler : IRequestHandler<UpdateCardCommand, Unit>
    {
        private readonly IGenericRepository<Card> _cardRepository;
        private readonly IGenericRepository<CardList> _cardListRepository;
        private readonly IMapper _mapper;

        public UpdateCardCommandHandler(IGenericRepository<Card> cardRepository, IGenericRepository<CardList> cardListRepository, IMapper mapper)
        {
            _cardRepository = cardRepository;
            _cardListRepository = cardListRepository;
            _mapper = mapper;
        }

        public async Task<Unit> Handle(UpdateCardCommand request, CancellationToken cancellationToken)
        {
            var cardToUpdadate = await _cardRepository.GetByIdAsync(request.CardId);

            if (cardToUpdadate == null)
            {
                throw new NotFoundException(request.CardId.ToString());
            }

            if (request.CardListId != Guid.Empty)
            {
                var cardList = await _cardListRepository.GetByIdAsync(request.CardListId);

                if (cardList == null)
                {
                    throw new NotFoundException(request.CardListId.ToString());
                }

                if(cardToUpdadate.BoardId != cardList.BoardId)
                {
                    throw new ValidationException("You cannot move a card to another board's list");
                }

                cardList.Items.Add(cardToUpdadate);
            }

            _mapper.Map(request, cardToUpdadate, typeof(UpdateCardCommand), typeof(Card));

            await _cardRepository.UpdateAsync(cardToUpdadate);

            return Unit.Value;
        }
    }
}
