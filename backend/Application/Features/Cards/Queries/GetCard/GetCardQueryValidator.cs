using FluentValidation;

namespace Application.Features.Cards.Queries.GetCard
{
    public class GetCardQueryValidator : AbstractValidator<GetCardQuery>
    {
        public GetCardQueryValidator() 
        {
            RuleFor(q => q.Id).NotEmpty();
        }
    }
}
