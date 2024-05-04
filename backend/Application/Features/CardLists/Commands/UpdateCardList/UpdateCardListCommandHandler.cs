using Application.Contracts;
using AutoMapper;
using Domain.Entities;
using Domain.Exceptions;
using MediatR;

namespace Application.Features.CardLists.Commands.UpdateCardList
{
    public class UpdateCardListCommandHandler : IRequestHandler<UpdateCardListCommand, Unit>
    {
        private readonly IGenericRepository<CardList> _cardListRepository;
        private readonly IMapper _mapper;

        public UpdateCardListCommandHandler(IGenericRepository<CardList> cardListRepository, IMapper mapper)
        {
            _cardListRepository = cardListRepository;
            _mapper = mapper;
        }

        public async Task<Unit> Handle(UpdateCardListCommand request, CancellationToken cancellationToken)
        {
            var cardListToUpdadate = await _cardListRepository.GetByIdAsync(request.Id);

            if (cardListToUpdadate == null)
            {
                throw new NotFoundException(request.Id.ToString());
            }

            _mapper.Map(request, cardListToUpdadate, typeof(UpdateCardListCommand), typeof(CardList));

            await _cardListRepository.UpdateAsync(cardListToUpdadate);

            return Unit.Value;
        }
    }
}
