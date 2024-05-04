using Application.Features.CardLists.Queries.GetCardListPagedCommand;
using FluentValidation;

namespace Application.Features.ActionHistory.Queries.GetActionHistoryPaged
{
    public class GetActionLogPagedValidator : AbstractValidator<GetActionLogPagedQuery>
    { 
        public GetActionLogPagedValidator() {
            RuleFor(q => q.Page).GreaterThan(0);
            RuleFor(q => q.PageSize).GreaterThan(0);
        }
    }
}
