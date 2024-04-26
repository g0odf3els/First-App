using Application.Features.CardLists.Queries.GetCardListPagedCommand;
using FluentValidation;

namespace Application.Features.CardLists.Queries.GetCardListPaged
{
    public class GetCardListPagedQueryValidator : AbstractValidator<GetCardListPagedQuery>
    {
        public GetCardListPagedQueryValidator()
        {
            RuleFor(q => q.Page).GreaterThan(0);
            RuleFor(q => q.PageSize).GreaterThan(0);
        }
    }
}
