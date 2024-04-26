using FluentValidation;

namespace Application.Features.CardLists.Commands.DeleteCardListCommand
{
    public class DeleteCardListCommandValidator : AbstractValidator<DeleteCardListCommand>
    {
        public DeleteCardListCommandValidator() 
        {
            RuleFor(c => c.Id).NotEmpty();
        }
    }
}
