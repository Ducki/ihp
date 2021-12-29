import React from 'react';
import { LightSyndicationFeed } from "../utils";

function Feed(props: LightSyndicationFeed) {

    return (
        <div className="m-3 p-3 border rounded grow min-w-[25em]">
            <strong>test</strong>
            <ul>
                {
                    props.feed.map((f, i) => (
                        <li key={ i }><a href={ f.url } className="p-2">{ f.title }</a></li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Feed;