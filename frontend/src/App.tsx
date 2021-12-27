import React, { useEffect, useState } from 'react';
import './App.css';
import { getFeeds, TFeed } from "./utils";
import Feed from "./components/Feed";

function App() {

    const [feeds, setFeeds] = useState<TFeed[] | null>(null)

    useEffect(() => {
        setFeeds(getFeeds())
    }, [])


    return (
        <div>
            <div className="flex flex-wrap justify-between">

                { feeds
                    ? (
                        feeds.map((f, i) => <Feed key={ i } feed={ f } />)
                    )
                    : "Loading …"
                }

            </div>

        </div>
    );
}

export default App;
