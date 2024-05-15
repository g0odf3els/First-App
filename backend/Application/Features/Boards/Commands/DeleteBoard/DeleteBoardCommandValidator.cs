using FluentValidation;

namespace Application.Features.Boards.Commands.DeleteBoard
{
    public class DeleteBoardCommandValidator : AbstractValidator<DeleteBoardCommand>
    {
        public DeleteBoardCommandValidator() 
        {
            RuleFor(c => c.Id).NotEmpty();
        }
    }
}
