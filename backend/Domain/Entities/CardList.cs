using Domain.Common;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public class CardList : BaseEntity
    {
        public Guid BoardId { get; set; }

        [ForeignKey("BoardId")]
        public Board Board { get; set; }

        public string Name { get; set; }

        public IList<Card> Items { get; private set; } = new List<Card>();
    }
}
