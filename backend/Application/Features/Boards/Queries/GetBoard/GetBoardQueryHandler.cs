using Application.Contracts;
using Application.DTOs;
using Domain.Entities;
using Domain.Exceptions;
using AutoMapper;
using MediatR;

namespace Application.Features.Boards.Queries.GetBoard
{
    public class GetBoardQueryHandler : IRequestHandler<GetBoardQuery, BoardDto>
    {
        private readonly IGenericRepository<Board> _boardRepository;
        private readonly IMapper _mapper;

        public GetBoardQueryHandler(IGenericRepository<Board> boardRepository, IMapper mapper)
        {
            _boardRepository = boardRepository;
            _mapper = mapper;
        }

        public async Task<BoardDto> Handle(GetBoardQuery request, CancellationToken cancellationToken)
        {
            var board = await _boardRepository.GetByIdAsync(request.Id);

            if (board == null)
            {
                throw new NotFoundException(request.Id.ToString());
            }

            return _mapper.Map<BoardDto>(board);
        }
    }
}
