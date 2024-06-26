﻿using FluentValidation;

namespace Application.Features.CardLists.Commands.UpdateCardList
{
    public class UpdateCardListCommandValidator : AbstractValidator<UpdateCardListCommand>
    {
        public UpdateCardListCommandValidator() 
        {
            RuleFor(c => c.Id).NotEmpty();

            RuleFor(c => c.Name)
                 .NotEmpty()
                 .MaximumLength(200);
        }
    }
}
