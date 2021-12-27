import urls from "./dummy-data.json"

export type TFeed = {
    siteName: string,
    items: {
        link: string,
        title: string
    }[]
}

export function getFeeds() {
    const sources = urls as TFeed[]
    return sources
}