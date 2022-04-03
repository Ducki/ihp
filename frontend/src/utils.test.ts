import { render, screen } from '@testing-library/react'
import { FeedCollection, getFeeds, LightSyndicationFeed } from "./utils";


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


it("tests getFeeds()", async () => {
    // Given
    //@ts-ignore
    const fetchMock = jest.spyOn(global, 'fetch').mockImplementation(() =>
        Promise.resolve({
            text: () => Promise.resolve(feedCollection)
        })
    )

    JSON.parse = jest.fn().mockImplementationOnce(() => "hi");
    // When
    const getFeedsResullt = await getFeeds()

    // Assert
    expect(getFeedsResullt).toContain("hi")

})
