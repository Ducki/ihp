import React, { useEffect, useState } from 'react';
import './App.css';
import { FeedCollection, getFeeds } from "./utils";
import Feed from "./components/Feed";

function App() {

    const [feeds, setFeeds] = useState<FeedCollection | null>(null)
    const [lasteUpdated, setLastUpdated] = useState(new Date())

    useEffect(() => {
        (async () => {
            setFeeds(await getFeeds())
        })()
    }, [])


    return (
        <div>
            <div className="flex flex-wrap justify-evenly">

                { feeds
                    ? (
                        feeds.siteFeeds.map((f, i) => <Feed key={ i } feed={ f } />)
                    )
                    : "Loading …"
                }

            </div>
            <p className="mt-10 text-center text-xs">Last Update { lasteUpdated.toLocaleTimeString() }</p>
        </div>
    );
}

export default App;
