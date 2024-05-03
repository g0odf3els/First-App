using Application.Contracts;
using Domain.Entities;
using Infrastructure.Data.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data.Repositories
{
    public class ActionLogRepository : GenericRepository<ActionLog>, IActionLogRepository
    {
        public ActionLogRepository(AppDbContext dbContext) : base(dbContext) { }

        public async Task<List<ActionLog>> GetActionLogPagedWithAffectedProperties(int page, int size)
        {
            return await _dbContext.Set<ActionLog>()
                .Include(c => c.AffectedProperties)
                .Skip((page - 1) * size)
                .Take(size)
                .OrderByDescending(c => c.Timestamp)
                .AsNoTracking()
                .ToListAsync();
        }

        public async Task<List<ActionLog>> GetCardActionLogPagedWithAffectedProperties(Guid id, int page, int size)
        {
            return await _dbContext.Set<ActionLog>()
                 .Include(c => c.AffectedProperties)
                 .Skip((page - 1) * size)
                 .Take(size)
                 .Where(c => c.EntityId == id)
                 .OrderByDescending(c => c.Timestamp)
                 .AsNoTracking()
                 .ToListAsync();
        }
    }
}
