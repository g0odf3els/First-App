using Domain.Common;

namespace Domain.Entities
{
     public class Board : BaseEntity
    {
        public string Name { get; set; }

        public IList<Card> Cards { get; private set; } = new List<Card>();

        public IList<CardList> CardLists { get; private set; } = new List<CardList>();
    }
}
