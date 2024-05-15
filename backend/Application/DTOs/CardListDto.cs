namespace Application.DTOs
{
    public class CardListDto
    {
        public Guid Id { get; set; }

        public Guid BoardId { get; set; }

        public string Name { get; set; }

        public IEnumerable<CardDto> Items { get; set; }
    }
}
