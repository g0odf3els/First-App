using Application.Contracts;
using Application.DTOs;
using AutoMapper;
using MediatR;

namespace Application.Features.ActionLog.Queries.GetCardActionLogPaged
{
    public class GetCardActionLogPagedQueryHandler : IRequestHandler<GetCardActionLogPagedQuery, List<ActionLogDto>>
    {
        private readonly IActionLogRepository _actionLogRepostiry;
        private readonly IMapper _mapper;

        public GetCardActionLogPagedQueryHandler(IActionLogRepository actionLogRepostiry, IMapper mapper)
        {
            _actionLogRepostiry = actionLogRepostiry;
            _mapper = mapper;
        }

        public async Task<List<ActionLogDto>> Handle(GetCardActionLogPagedQuery request, CancellationToken cancellationToken)
        {
            var actionLogPaged = await _actionLogRepostiry.GetCardActionLogPagedWithAffectedProperties( request.cardId, request.Page, request.PageSize);
            return _mapper.Map<List<ActionLogDto>>(actionLogPaged);
        }
    }
}
