import React, { useEffect, useState } from 'react';
import './App.css';
import { FeedCollection, getFeeds } from "./utils";
import Feed from "./components/Feed";

function App() {

    const [feeds, setFeeds] = useState<FeedCollection | null>(null)
    const [lastUpdated, setLastUpdated] = useState(new Date())

    useEffect(() => {
        (async () => {
            setFeeds(await getFeeds())
        })()
    }, [lastUpdated])

    function refresh() {
        setLastUpdated(new Date())
    }


    return (
        <div>
            <h1 className='text-center font-bold mb-2 dark:text-stone-200'>My Homepage</h1>
            <p className="text-center text-xs text-gray-400">
                Letztes Update { lastUpdated.toLocaleTimeString() } Uhr
                / <button
                    className='text-blue-900 no-underline dark:text-blue-400 hover:underline'
                    onClick={ refresh }>Update</button>
            </p>
            <hr className='dark:border-stone-600 mt-1' />
            <div className="flex flex-wrap justify-evenly">

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
