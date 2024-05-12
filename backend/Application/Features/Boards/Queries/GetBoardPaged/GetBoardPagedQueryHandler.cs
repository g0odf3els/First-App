using Application.Contracts;
using Application.DTOs;
using Domain.Entities;
using AutoMapper;
using MediatR;

namespace Application.Features.Boards.Queries.GetBoardPaged
{
    public class GetBoardPagedQueryHandler : IRequestHandler<GetBoardPagedQuery, List<BoardDto>>
    {
        private readonly IGenericRepository<Board> _boardRepository;
        private readonly IMapper _mapper;

        public GetBoardPagedQueryHandler(IGenericRepository<Board> boardRepository, IMapper mapper)
        {
            _boardRepository = boardRepository;
            _mapper = mapper;
        }

        public async Task<List<BoardDto>> Handle(GetBoardPagedQuery request, CancellationToken cancellationToken)
        {
            var boardPaged = await _boardRepository.GetPagedReponseAsync(request.Page, request.PageSize);
            return _mapper.Map<List<BoardDto>>(boardPaged);

        }
    }
}
