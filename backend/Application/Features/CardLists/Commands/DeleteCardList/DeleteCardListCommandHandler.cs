using Application.Contracts;
using Domain.Exceptions;
using MediatR;

namespace Application.Features.CardLists.Commands.DeleteCardListCommand
{
    public class DeleteCategoryCommandHandler : IRequestHandler<DeleteCardListCommand, Unit>
    {
        private readonly ICardListRepository _cardListRepository;

        public DeleteCategoryCommandHandler(ICardListRepository cardListRepository)
        {
            _cardListRepository = cardListRepository;
        }

        public async Task<Unit> Handle(DeleteCardListCommand request, CancellationToken cancellationToken)
        {
            var cardListToDelete = await _cardListRepository.GetCardListWithCards(request.Id);

            if (cardListToDelete == null)
            {
                throw new NotFoundException(request.Id.ToString());
            }

            await _cardListRepository.DeleteAsync(cardListToDelete);
            return Unit.Value;
        }
    }
}
