using FluentValidation;

namespace Application.Features.ActionLog.Queries.GetCardActionLogPaged
{
    public class GetCardActionLogPagedValidator : AbstractValidator<GetCardActionLogPagedQuery>
    {
        public GetCardActionLogPagedValidator() 
        {
            RuleFor(q => q.cardId).NotEmpty();

            RuleFor(q => q.Page).GreaterThan(0);

            RuleFor(q => q.PageSize).GreaterThan(0);
        }
    }
}
