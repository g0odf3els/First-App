using FluentValidation;

namespace Application.Features.Cards.Queries.GetCardPaged
{
    public class GetCardPagedQueryValidator : AbstractValidator<GetCardPagedQuery>
    {
        public GetCardPagedQueryValidator()
        {
            RuleFor(q => q.Page).GreaterThan(0);
            RuleFor(q => q.PageSize).GreaterThan(0);
        }
    }
}
