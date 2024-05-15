using Application.Contracts;
using Application.DTOs;
using AutoMapper;
using Domain.Entities;
using Domain.Exceptions;
using MediatR;

namespace Application.Features.CardLists.Commands.CreateCardListCommand
{
    public class CreateCardListCommandHandler : IRequestHandler<CreateCardListCommand, CardListDto>
    {
        private readonly IGenericRepository<CardList> _cardListRepository;
        private readonly IGenericRepository<Board> _boardRepository;

        private readonly IMapper _mapper;

        public CreateCardListCommandHandler(
            IGenericRepository<CardList> cardListRepository,
            IGenericRepository<Board> boardRepositroy,
            IMapper mapper)
        {
            _cardListRepository = cardListRepository;
            _boardRepository = boardRepositroy;
            _mapper = mapper;
        }

        public async Task<CardListDto> Handle(CreateCardListCommand request, CancellationToken cancellationToken)
        {
            var board = await _boardRepository.GetByIdAsync(request.BoardId);

            if (board == null)
            {
                throw new NotFoundException(request.BoardId.ToString());
            }

            var cardList = new CardList()
            {
                BoardId = board.Id,
                Board = board,
                CreationTime = DateTime.UtcNow,
                Name = request.Name
            };

            cardList = await _cardListRepository.AddAsync(cardList);
            return _mapper.Map<CardListDto>(cardList);
        }
    }
}
