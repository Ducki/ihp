import React from 'react';
import { getFormattedDate, LightSyndicationFeed } from "../utils";

function Feed(props: { feed: LightSyndicationFeed }) {


    return (
        <div className="my-3 mx-1 p-3 border dark:border-stone-700 rounded grow min-w-[15em] max-w-xl text-sm">
            <strong className='dark:text-stone-400'>{ props.feed.siteName }</strong>
            <ul>
                {
                    props.feed.feedItems.map((f, i) => (
                        <li key={ i }>
                            <p className='my-0.5  max-w-xl flex'>
                                <em className='flex-none text-gray-400 dark:text-stone-600 w-12 inline-block'>{ getFormattedDate(f.publishDate) }</em>
                                <a href={ f.url } className="truncate flex-grow" title={ f.summary } target="_blank" rel="noreferrer">{ f.title }</a>
                            </p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Feed;
