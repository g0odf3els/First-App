using FluentValidation;

namespace Application.Features.Boards.Commands.UpdateBoard
{
    public class UpdateBoardCommandValidator : AbstractValidator<UpdateBoardCommand>
    {
        public UpdateBoardCommandValidator() 
        {
            RuleFor(c => c.Id).NotEmpty();

            RuleFor(c => c.Name)
                .NotEmpty()
                .MaximumLength(200);
        }
    }
}
