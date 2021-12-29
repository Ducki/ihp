using System.Reflection.Metadata;
using System.ServiceModel.Syndication;
using System.Text.Json;
using System.Xml;

namespace backend
{
    public class DummyRunner
    {
        private readonly List<TUrl>? Urls;

        public DummyRunner()
        {
            var fileContent = File.ReadAllText("dummy-data.json");

            Urls = JsonSerializer.Deserialize<List<TUrl>>(fileContent);

            if (Urls is null)
            {
                throw new Exception();
            }
        }

        public List<TUrl> GetUrls()
        {
            return Urls!;
        }

        private async Task<LightSyndicationFeed> DownloadFeedAsync(string url)
        {
            var u = new Uri(url);
            var response = await new HttpClient().GetStreamAsync(u);
            var xmlreader = XmlReader.Create(response);
            var sfeed = SyndicationFeed.Load(xmlreader);

            var items = sfeed.Items.Take(8);

            var feed = items.Select(i => new LightSyndicationItem()
            {
                Title = i.Title.Text,
                PublishDate = i.PublishDate.DateTime,
                Summary = i.Summary.Text,
                Url = i.Links.First().Uri.ToString()
            });

            return new LightSyndicationFeed()
            {
                FeedItems = feed.ToList(),
                SiteName = sfeed.Title.Text
            };
        }

        private FeedCollection GetSiteFeeds()
        {
            var feeds = new List<LightSyndicationFeed>();

            List<Task<LightSyndicationFeed>> downloadJobs = new();

            foreach (var url in Urls!)
            {
                downloadJobs.Add(DownloadFeedAsync(url.url));
            }

            Task.WaitAll(downloadJobs.ToArray());
            feeds = downloadJobs.Select(d => d.Result).ToList();

            var feed = new FeedCollection()
            {
                SiteFeeds = feeds
            };

            return feed;
        }

        public FeedCollection HandleAsync()
        {
            return GetSiteFeeds();
        }
    }
}