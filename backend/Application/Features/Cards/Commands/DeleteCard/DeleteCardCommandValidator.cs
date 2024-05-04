using FluentValidation;

namespace Application.Features.Cards.Commands.DeleteCard
{
    public class DeleteCardCommandValidator : AbstractValidator<DeleteCardCommand>
    {
        public DeleteCardCommandValidator()
        {
            RuleFor(c => c.Id).NotEmpty();
        }
    }
}
