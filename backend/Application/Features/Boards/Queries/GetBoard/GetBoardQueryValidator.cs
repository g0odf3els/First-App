using FluentValidation;

namespace Application.Features.Boards.Queries.GetBoard
{
    public class GetBoardQueryValidator : AbstractValidator<GetBoardQuery>
    {
        public GetBoardQueryValidator() 
        {
            RuleFor(q => q.Id).NotEmpty();
        }
    }
}
