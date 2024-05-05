using FluentValidation;

namespace Application.Features.Cards.Commands.UpdateCard
{
    public class UpdateCardCommandValidator : AbstractValidator<UpdateCardCommand>
    {
        public UpdateCardCommandValidator()
        {
            RuleFor(c => c.CardId).NotEmpty();

            RuleFor(c => c.CardListId).NotEmpty();

            RuleFor(c => c.Name)
                .NotEmpty()
                .MaximumLength(100);

            RuleFor(c => c.Description).MaximumLength(2000);

            RuleFor(c => c.Priority).IsInEnum();
        }
    }
}
