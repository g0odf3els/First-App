using FluentValidation;

namespace Application.Features.CardLists.Queries.GetCardList
{
    public class GetCardListQueryValidator : AbstractValidator<GetCardListQuery>
    {
        public GetCardListQueryValidator()
        {
            RuleFor(q => q.Id).NotEmpty();
        }
    }
}
