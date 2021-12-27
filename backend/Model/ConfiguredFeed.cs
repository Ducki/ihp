using System.ServiceModel.Syndication;

namespace backend.Model
{
    public class ConfiguredFeed
    {
        public SyndicationFeed Feed { get; set; } = null!;
        public int DisplayColumn { get; set; }
        public int DisplayRow { get; set; }
    }
}