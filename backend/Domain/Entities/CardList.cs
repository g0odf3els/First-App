using Domain.Common;

namespace Domain.Entities
{
    public class CardList : BaseEntity
    {
        public string Name { get; set; }

        public IList<Card> Items { get; private set; } = new List<Card>();

    }
}
