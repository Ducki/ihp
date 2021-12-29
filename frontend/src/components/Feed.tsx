import React from 'react';
import { getFormattedDate, LightSyndicationFeed } from "../utils";

function Feed(props: { feed: LightSyndicationFeed }) {


    return (
        <div className="m-3 p-3 border rounded grow min-w-[25em] max-w-xl text-sm">
            <strong>{ props.feed.siteName }</strong>
            <ul>
                {
                    props.feed.feedItems.map((f, i) => (
                        <li key={ i }>
                            <em className='text-gray-400'>{ getFormattedDate(f.publishDate) }</em>
                            <a href={ f.url } className="p-2" target="_blank" rel="noreferrer">{ f.title }</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Feed;
