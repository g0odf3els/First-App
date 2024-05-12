using Application.Contracts;
using Domain.Entities;
using Infrastructure.Data.Context;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data.Repositories
{
    public class ActionLogRepository : GenericRepository<ActionLog>, IActionLogRepository
    {
        public ActionLogRepository(AppDbContext dbContext) : base(dbContext) { }

        public async Task<List<ActionLog>> GetBoardActionLogPaged(Guid boardId, int page, int size)
        {
            return await _dbContext.Set<ActionLog>()
                .Include(c => c.AffectedProperties)
                .Skip((page - 1) * size)
                .Take(size)
                .Where(c => c.BoardId == boardId)
                .OrderByDescending(c => c.CreationTime)
                .AsNoTracking()
                .ToListAsync();
        }

        public async Task<List<ActionLog>> GetCardActionLogPaged(Guid cardId, int page, int size)
        {
            return await _dbContext.Set<ActionLog>()
                 .Include(c => c.AffectedProperties)
                 .Skip((page - 1) * size)
                 .Take(size)
                 .Where(c => c.EntityId == cardId)
                 .OrderByDescending(c => c.CreationTime)
                 .AsNoTracking()
                 .ToListAsync();
        }
    }
}
