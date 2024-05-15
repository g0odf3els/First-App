using Domain.Entities;
using Application.Contracts;
using Application.DTOs;
using AutoMapper;
using MediatR;

namespace Application.Features.Boards.Commands.CreateBoard
{
    public class CreateBoardCommandHandler : IRequestHandler<CreateBoardCommand, BoardDto>
    {
        private readonly IGenericRepository<Board> _boardRepository;
        private readonly IMapper _mapper;

        public CreateBoardCommandHandler(IGenericRepository<Domain.Entities.Board> boardRepository, IMapper mapper)
        {
            _boardRepository = boardRepository;
            _mapper = mapper;
        }

        public async Task<BoardDto> Handle(CreateBoardCommand request, CancellationToken cancellationToken)
        {
            var cardList = new Board()
            {
                CreationTime = DateTime.UtcNow,
                Name = request.Name
            };

            cardList = await _boardRepository.AddAsync(cardList);
            return _mapper.Map<BoardDto>(cardList);
        }
    }
}
