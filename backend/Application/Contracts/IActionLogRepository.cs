using Domain.Entities;

namespace Application.Contracts
{
    public interface IActionLogRepository : IGenericRepository<ActionLog>
    {
        Task<List<ActionLog>> GetBoardActionLogPaged(Guid boardId, int page, int size);
        Task<List<ActionLog>> GetCardActionLogPaged(Guid cardId, int page, int size);
    }
}
