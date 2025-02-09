import { useState } from "react";

import Navigation from "../../components/layout/Navigation";
import FeedList, { Feed } from "../../components/feed/FeedList";

import { homeFeeds } from "../../config/mock/videosource";

export function HomePage() {
  const [feeds, setFeeds] = useState(homeFeeds);
  const onLoadMore = () => {
    setFeeds((feeds) => feeds.concat(homeFeeds));
  };

  return (
    <>
      <div className="h-screen flex flex-col space-y-16 py-8 overflow-y-scroll snap-mandatory snap-y scrollbar-none">
        {feeds.map((feed) => (
          <Feed
            feed={feed}
            className="h-screen md:h-[calc(100vh-32px)] py-4"
          />
        ))}
      </div>
    </>
  );
}
