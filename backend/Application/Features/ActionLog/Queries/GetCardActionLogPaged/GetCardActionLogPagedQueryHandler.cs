using Application.Contracts;
using Application.DTOs;
using AutoMapper;
using Domain.Entities;
using Domain.Exceptions;
using MediatR;

namespace Application.Features.ActionLog.Queries.GetCardActionLogPaged
{
    public class GetCardActionLogPagedQueryHandler : IRequestHandler<GetCardActionLogPagedQuery, List<ActionLogDto>>
    {
        private readonly IActionLogRepository _actionLogRepostiry;
        private readonly IGenericRepository<Card> _cardRepository;
        private readonly IMapper _mapper;

        public GetCardActionLogPagedQueryHandler(IActionLogRepository actionLogRepostiry, IGenericRepository<Card> cardRepository, IMapper mapper)
        {
            _actionLogRepostiry = actionLogRepostiry;
            _cardRepository = cardRepository;
            _mapper = mapper;
        }

        public async Task<List<ActionLogDto>> Handle(GetCardActionLogPagedQuery request, CancellationToken cancellationToken)
        {
            var card = await _cardRepository.GetByIdAsync(request.cardId);

            if (card == null)
            {
                throw new NotFoundException(request.cardId.ToString());
            }

            var actionLogPaged = await _actionLogRepostiry.GetCardActionLogPaged( card.Id, request.Page, request.PageSize);

            return _mapper.Map<List<ActionLogDto>>(actionLogPaged);
        }
    }
}
