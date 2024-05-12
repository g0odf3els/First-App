using FluentValidation;

namespace Application.Features.Boards.Commands.CreateBoard
{
    public class CreateBoardCommandValidator : AbstractValidator<CreateBoardCommand>
    {
        public CreateBoardCommandValidator()
        {
            RuleFor(c => c.Name)
                 .NotEmpty()
                 .MaximumLength(200);
        }
    }
}
