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
    publishDate: Date;
}

export interface LightSyndicationFeed {
    siteName: string;
    feedItems: LightSyndicationItem[];
}

export interface FeedCollection {
    siteFeeds: LightSyndicationFeed[];
}

export async function getFeeds() {

    function reviver(key: any, value: any) {
        const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z?$/;
        if (typeof value === "string" && dateFormat.test(value)) {
            return new Date(value)
        }
        return value
    }

    const rawResult = await fetch("http://localhost:5000/api").then(result => result.text())
    const parsedJson: FeedCollection = JSON.parse(rawResult, reviver)

    return parsedJson
}

export function getFormattedDate(date: Date) {
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
}
