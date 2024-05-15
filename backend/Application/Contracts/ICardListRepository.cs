using Domain.Entities;

namespace Application.Contracts
{
    public interface ICardListRepository : IGenericRepository<CardList>
    {
        Task<CardList?> GetCardListWithCards(Guid id);

        Task<List<CardList>> GetCardListPagedWithCards(Guid boardId, int page, int size);
    }
}
