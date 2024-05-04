namespace Application.DTOs
{
    public class PropertyLogDto
    {
        public Guid ActionLogId { get; set; }
        public string PropertyName { get; set; }
        public string OldValue { get; set; }
        public string NewValue { get; set; }
    }
}
