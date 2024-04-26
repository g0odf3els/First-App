using Domain.Entities;

namespace Application.Contracts
{
    public interface ICardListRepository : IGenericRepository<CardList>
    {
        Task<CardList?> GetCardListWithCards(Guid id);

        Task<List<CardList>> GetCardListPagedWithCards(int page, int size);
    }
}
