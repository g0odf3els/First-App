using FluentValidation;

namespace Application.Features.Cards.Commands.CreateCard
{
    public class CreateCardCommandValidator : AbstractValidator<CreateCardCommand>
    {
        public CreateCardCommandValidator() 
        {
            RuleFor(c => c.CardListId).NotEmpty();
            RuleFor(c => c.Name).NotEmpty();
        }
    }
}
