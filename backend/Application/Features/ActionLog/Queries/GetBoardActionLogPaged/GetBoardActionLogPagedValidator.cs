using FluentValidation;

namespace Application.Features.ActionHistory.Queries.GetActionHistoryPaged
{
    public class GetBoardActionLogPagedValidator : AbstractValidator<GetBoardActionLogPagedQuery>
    { 
        public GetBoardActionLogPagedValidator() {
            RuleFor(q => q.boardId).NotEmpty();

            RuleFor(q => q.Page).GreaterThan(0);

            RuleFor(q => q.PageSize).GreaterThan(0);
        }
    }
}
