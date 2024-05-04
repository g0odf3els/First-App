using Application.Contracts;
using Application.DTOs;
using AutoMapper;
using Domain.Entities;
using Domain.Exceptions;
using MediatR;

namespace Application.Features.Cards.Queries.GetCard
{
    public class GetCardQueryHandler : IRequestHandler<GetCardQuery, CardDto>
    {
        private readonly IGenericRepository<Card> _cardRepostitory;
        private readonly IMapper _mapper;

        public GetCardQueryHandler(IGenericRepository<Card> cardRepostitory, IMapper mapper)
        {
            _cardRepostitory = cardRepostitory;
            _mapper = mapper;
        }

        public async Task<CardDto> Handle(GetCardQuery request, CancellationToken cancellationToken)
        {
            var card = await _cardRepostitory.GetByIdAsync(request.Id);

            if (card == null)
            {
                throw new NotFoundException(request.Id.ToString());
            }

            return _mapper.Map<CardDto>(card);
        }
    }
}
