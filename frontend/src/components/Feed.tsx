import React from 'react';
import { TFeed } from "../utils";

function Feed(props: { feed: TFeed }) {
    return (
        <div className="m-3 p-3 border rounded grow">
            <strong>test</strong>
            <ul>
                {
                    props.feed.items.map((f, i) => (
                        <li key={i}><a href={f.link} className="p-2">{f.title}</a></li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Feed;