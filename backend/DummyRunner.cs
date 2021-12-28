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

        private async Task<IEnumerable<SyndicationItem>> DownloadFeedAsync(string url)
        {
            System.Console.WriteLine("hi");
            var u = new Uri(url);
            var response = await new HttpClient().GetStreamAsync(u);
            XmlReader xmlreader = XmlReader.Create(response);
            SyndicationFeed sfeed = SyndicationFeed.Load(xmlreader);

            var items = sfeed.Items.Take(5);
            return items;
        }

        public async Task<IEnumerable<SyndicationItem>> HandleAsync()
        {
            return await DownloadFeedAsync(Urls.First().url);

        }
    }
}