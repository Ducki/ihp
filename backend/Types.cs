namespace backend
{
    public class TUrl
    {
        public string url { get; set; } = null!;
    }

    public class LightSyndicationItem
    {
        public string Title { get; set; } = null!;
        public string Url { get; set; } = null!;
        public string Summary { get; set; } = null!;
        public DateTime PublishDate { get; set; }
    }

    public class LightSyndicationFeed
    {
        public string SiteName { get; set; } = null!;
        public List<LightSyndicationItem> FeedItems { get; set; } = null!;
        public string Url { get; set; } = null!;
    }

    public class FeedCollection
    {
        public List<LightSyndicationFeed> SiteFeeds { get; set; } = null!;
    }
}