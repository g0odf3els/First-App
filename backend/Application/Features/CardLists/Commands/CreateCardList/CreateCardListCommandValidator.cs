using FluentValidation;

namespace Application.Features.CardLists.Commands.CreateCardListCommand
{
    public class CreateCardListCommandValidator : AbstractValidator<CreateCardListCommand>
    {
        public CreateCardListCommandValidator()
        {
            RuleFor(c => c.Name).NotEmpty();
        }
    }
}
