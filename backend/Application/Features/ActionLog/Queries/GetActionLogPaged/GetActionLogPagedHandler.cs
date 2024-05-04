using Application.Contracts;
using Application.DTOs;
using AutoMapper;
using MediatR;

namespace Application.Features.ActionHistory.Queries.GetActionHistoryPaged
{
    public class GetActionLogPagedHandler : IRequestHandler<GetActionLogPagedQuery, List<ActionLogDto>>
    {
        private readonly IActionLogRepository _actionLogRepostiry;
        private readonly IMapper _mapper;

        public GetActionLogPagedHandler(IActionLogRepository actionLogRepostiry, IMapper mapper)
        {
            _actionLogRepostiry = actionLogRepostiry;
            _mapper = mapper;
        }

        public async Task<List<ActionLogDto>> Handle(GetActionLogPagedQuery request, CancellationToken cancellationToken)
        {
            var actionLogPaged = await _actionLogRepostiry.GetActionLogPagedWithAffectedProperties(request.Page, request.PageSize);
            return _mapper.Map<List<ActionLogDto>>(actionLogPaged);
        }
    }
}
