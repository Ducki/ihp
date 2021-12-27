
namespace backend.Model
{
    public partial class Feed
    {
        public int Id { get; set; }
        public string Uri { get; set; } = null!;
        public int? DisplayColumn { get; set; }
        public int? DisplayRow { get; set; }
        public int? DisplayItemCount { get; set; }
        public string FeedTitle { get; set; } = null!;
    }
}