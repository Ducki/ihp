import React from 'react';
import { render, screen } from '@testing-library/react'
import { LightSyndicationFeed } from "../utils";
import Feed from './Feed';

beforeEach(() => {
});

afterEach(() => {
});


it("Renders a Feed", () => {
    // Given
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

    // When
    render(<Feed feed={ fakeFeed } />)

    // Assert
    const el = screen.getByText("FeedItem2")
    expect(el).toBeDefined()

    const items = screen.getAllByTestId("feedItem")
    expect(items).toHaveLength(2)
})
