using FluentValidation;

namespace Application.Features.Cards.Commands.UpdateCard
{
    public class UpdateCardCommandValidator : AbstractValidator<UpdateCardCommand>
    {
        public UpdateCardCommandValidator() 
        {
           RuleFor(c => c.CardId).NotEmpty();
        }
    }
}
