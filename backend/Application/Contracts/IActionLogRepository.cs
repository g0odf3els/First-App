using Domain.Entities;

namespace Application.Contracts
{
    public interface IActionLogRepository : IGenericRepository<ActionLog>
    {
        Task<List<ActionLog>> GetActionLogPagedWithAffectedProperties(int page, int size);
        Task<List<ActionLog>> GetCardActionLogPagedWithAffectedProperties(Guid id, int page, int size);
    }
}
