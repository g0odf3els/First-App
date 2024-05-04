using Application.Contracts;
using Domain.Entities;
using Domain.Exceptions;
using MediatR;

namespace Application.Features.Cards.Commands.DeleteCard
{
    public class DeleteCardCommandHandler : IRequestHandler<DeleteCardCommand, Unit>
    {
        private readonly IGenericRepository<Card> _cardRepository;

        public DeleteCardCommandHandler(IGenericRepository<Card> cardRepository)
        {
            _cardRepository = cardRepository;
        }

        public async Task<Unit> Handle(DeleteCardCommand request, CancellationToken cancellationToken)
        {
            var cardToDelete = await _cardRepository.GetByIdAsync(request.Id);

            if (cardToDelete == null)
            {
                throw new NotFoundException(request.Id.ToString());
            }

            await _cardRepository.DeleteAsync(cardToDelete);

            return Unit.Value;
        }
    }
}
