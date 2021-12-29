import React from 'react';
import { getFormattedDate, LightSyndicationFeed } from "../utils";

function Feed(props: { feed: LightSyndicationFeed }) {


    return (
        <div className="m-3 p-3 border rounded grow min-w-[25em]">
            <strong>{props.feed.siteName}</strong>
            <ul>
                {
                    props.feed.feedItems.map((f, i) => (
                        <li key={i}>
                            <em>{getFormattedDate(f.publishDate)}</em>
                            <a href={f.url} className="p-2">{f.title}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Feed;
