using Domain.Entities;
using Domain.Exceptions;
using Application.Contracts;
using AutoMapper;
using MediatR;

namespace Application.Features.Boards.Commands.UpdateBoard
{
    public class UpdateBoardCommandHandler : IRequestHandler<UpdateBoardCommand, Unit>
    {
        private readonly IGenericRepository<Board> _boardRepository;
        private readonly IMapper _mapper;

        public UpdateBoardCommandHandler(IGenericRepository<Board> boardRepository, IMapper mapper)
        {
            _boardRepository = boardRepository;
            _mapper = mapper;
        }

        public async Task<Unit> Handle(UpdateBoardCommand request, CancellationToken cancellationToken)
        {
            var boardToUpdadate = await _boardRepository.GetByIdAsync(request.Id);

            if (boardToUpdadate == null)
            {
                throw new NotFoundException(request.Id.ToString());
            }

            _mapper.Map(request, boardToUpdadate, typeof(UpdateBoardCommand), typeof(Board));

            await _boardRepository.UpdateAsync(boardToUpdadate);

            return Unit.Value;
        }
    }
}
