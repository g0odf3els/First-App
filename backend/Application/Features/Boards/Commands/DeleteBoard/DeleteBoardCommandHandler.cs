using Application.Contracts;
using Domain.Entities;
using Domain.Exceptions;
using MediatR;

namespace Application.Features.Boards.Commands.DeleteBoard
{
    public class DeleteBoardCommandHandler : IRequestHandler<DeleteBoardCommand, Unit>
    {
        private readonly IGenericRepository<Board> _boardRepository;

        public DeleteBoardCommandHandler(IGenericRepository<Board> boardRepository)
        {
            _boardRepository = boardRepository;
        }

        public async Task<Unit> Handle(DeleteBoardCommand request, CancellationToken cancellationToken)
        {
            var boardToDelete = await _boardRepository.GetByIdAsync(request.Id);

            if (boardToDelete == null)
            {
                throw new NotFoundException(request.Id.ToString());
            }

            await _boardRepository.DeleteAsync(boardToDelete);

            return Unit.Value;
        }
    }
}