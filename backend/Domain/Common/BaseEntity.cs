namespace Domain.Common
{
    public abstract class BaseEntity
    {
        public DateTime CreationTime { get; set; }
        public Guid Id { get; set; }
    }
}
