import urls from "./dummy-data.json"

export type TFeed = {
    siteName: string,
    items: {
        link: string,
        title: string
    }[]
}

export interface LightSyndicationItem {
    title: string;
    url: string;
    summary: string;
    publishDate: string;
}

export interface LightSyndicationFeed {
    feed: LightSyndicationItem[];
}

export interface FeedCollection {
    siteFeeds: LightSyndicationFeed[];
}

export async function getFeeds() {

    const result = await fetch("http://localhost:5000/api").then(result => result.json());
    console.log(result);

    const sources = urls as TFeed[]
    return sources
}