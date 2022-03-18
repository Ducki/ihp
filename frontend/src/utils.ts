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
    url: string;
    feedItems: LightSyndicationItem[];
}

export interface FeedCollection {
    siteFeeds: LightSyndicationFeed[];
}

export async function getFeeds() {
    console.log("Downloading new feeds");

    function reviver(key: any, value: any) {
        const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z?$/;
        if (typeof value === "string" && dateFormat.test(value)) {
            return new Date(value)
        }
        return value
    }

    let rawResult
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
        rawResult = await fetch("http://localhost:5000/api").then(result => result.text())
    } else {
        rawResult = await fetch("/api").then(result => result.text())
    }

    const parsedJson: FeedCollection = JSON.parse(rawResult, reviver)

    return parsedJson
}

export function getFormattedDate(date: Date) {
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
}
