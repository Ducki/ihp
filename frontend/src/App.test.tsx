import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react'
import { FeedCollection, LightSyndicationFeed } from "./utils";
import App from './App';


const fakeFeed: LightSyndicationFeed = {
    siteName: "FakeFeed",
    feedItems: [{
        title: "FeedItem1",
        publishDate: new Date(),
        summary: "Lorem Ipsum",
        url: "http://example.com"
    },
    {
        title: "FeedItem2",
        publishDate: new Date(),
        summary: "Lorem Ipsum",
        url: "http://example.com"
    }]
}

const feedCollection: FeedCollection = {
    siteFeeds: [fakeFeed, fakeFeed]
}

beforeEach(() => {

});

afterEach(() => {
});


it("Renders the App", async () => {
    // Given
    //@ts-ignore
    jest.spyOn(global, 'fetch').mockImplementation(() =>
        Promise.resolve({
            text: () => "hi"
        })
    )

    JSON.parse = jest.fn().mockImplementationOnce(() => feedCollection);

    // When
    render(<App />)

    // Assert 
    const el = await screen.findAllByTestId("feed")
})
