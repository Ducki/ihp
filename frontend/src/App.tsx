import React, { useEffect, useState } from 'react';
import './App.css';
import { FeedCollection, getFeeds } from "./utils";
import Feed from "./components/Feed";

function App() {

    const [feeds, setFeeds] = useState<FeedCollection | null>(null)

    useEffect(() => {
        (async () => {
            setFeeds(await getFeeds())
        })()
    }, [])


    return (
        <div>
            <div className="flex flex-wrap justify-between">

                { feeds
                    ? (
                        feeds.siteFeeds.map((f, i) => <Feed key={ i } feed={ f } />)
                    )
                    : "Loading …"
                }

            </div>

        </div>
    );
}

export default App;
