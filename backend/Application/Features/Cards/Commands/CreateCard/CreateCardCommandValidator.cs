using FluentValidation;

namespace Application.Features.Cards.Commands.CreateCard
{
    public class CreateCardCommandValidator : AbstractValidator<CreateCardCommand>
    {
        public CreateCardCommandValidator() 
        {
            RuleFor(c => c.CardListId).NotEmpty();

            RuleFor(c => c.Name)
                .NotEmpty()
                .MaximumLength(150);

            RuleFor(c => c.Description).Length(1, 2000).When(c => !string.IsNullOrEmpty(c.Description));

            RuleFor(c => c.Priority).IsInEnum();
        }
    }
}
