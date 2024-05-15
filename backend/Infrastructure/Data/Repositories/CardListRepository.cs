using Application.Contracts;
using Domain.Entities;
using Infrastructure.Data.Context;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data.Repositories
{
    public class CardListRepository(AppDbContext dbContext) 
        : GenericRepository<CardList>(dbContext), ICardListRepository
    {
        public async Task<CardList?> GetCardListWithCards(Guid id)
        {
            return await _dbContext.Set<CardList>().Include(c => c.Items).FirstOrDefaultAsync(c => c.Id == id);
        }
        public async Task<List<CardList>> GetCardListPagedWithCards(Guid boardId, int page, int size)
        {
            return await _dbContext.Set<CardList>()
                .Include(c => c.Items)
                .OrderBy(c => c.CreationTime)
                .Skip((page - 1) * size)
                .Take(size)
                .Where(c => c.BoardId == boardId)
                .AsNoTracking()
                .ToListAsync();
        }
    }
}
