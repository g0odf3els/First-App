using Application.Contracts;
using Application.DTOs;
using AutoMapper;
using Domain.Entities;
using Domain.Exceptions;
using MediatR;

namespace Application.Features.ActionHistory.Queries.GetActionHistoryPaged
{
    public class GetBoardActionLogPagedHandler : IRequestHandler<GetBoardActionLogPagedQuery, List<ActionLogDto>>
    {
        private readonly IActionLogRepository _actionLogRepostiry;
        private readonly IGenericRepository<Board> _boardRepository;
        private readonly IMapper _mapper;

        public GetBoardActionLogPagedHandler(IActionLogRepository actionLogRepostiry, IGenericRepository<Board> boardRepostiry, IMapper mapper)
        {
            _actionLogRepostiry = actionLogRepostiry;
            _boardRepository = boardRepostiry;
            _mapper = mapper;
        }

        public async Task<List<ActionLogDto>> Handle(GetBoardActionLogPagedQuery request, CancellationToken cancellationToken)
        {
            var board = await _boardRepository.GetByIdAsync(request.boardId);

            if(board == null)
            {
                throw new NotFoundException(request.boardId.ToString());
            }

            var actionLogPaged = await _actionLogRepostiry.GetCardActionLogPaged(board.Id, request.Page, request.PageSize);

            return _mapper.Map<List<ActionLogDto>>(actionLogPaged);
        }
    }
}
