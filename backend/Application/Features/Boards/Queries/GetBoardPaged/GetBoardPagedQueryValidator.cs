using FluentValidation;

namespace Application.Features.Boards.Queries.GetBoardPaged
{
    public class GetBoardPagedQueryValidator : AbstractValidator<GetBoardPagedQuery>
    {
        public GetBoardPagedQueryValidator() 
        {
            RuleFor(q => q.Page).GreaterThan(0);
            RuleFor(q => q.PageSize).GreaterThan(0);
        }
    }
}
