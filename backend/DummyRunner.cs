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

        private async Task<IEnumerable<LightSyndicationItem>> DownloadFeedAsync(string url)
        {
            System.Console.WriteLine("hi");
            var u = new Uri(url);
            var response = await new HttpClient().GetStreamAsync(u);
            XmlReader xmlreader = XmlReader.Create(response);
            SyndicationFeed sfeed = SyndicationFeed.Load(xmlreader);

            var items = sfeed.Items.Take(5);

            var foo = items.Select(i =>
            {
                return new LightSyndicationItem()
                {
                    Title = i.Title.Text,
                    PublishDate = i.PublishDate.DateTime,
                    Summary = i.Summary.Text,
                    Url = i.Links.First().Uri.ToString()
                };
            });

            return foo;
        }

        public async Task<IEnumerable<LightSyndicationItem>> HandleAsync()
        {
            return await DownloadFeedAsync(Urls!.First().url);

        }
    }
}