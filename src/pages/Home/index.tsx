import { useState } from "react";

import FeedList from "../../components/feed/FeedList";

import { homeFeeds } from "../../config/mock/videosource";

export function HomePage() {
  const [feeds, setFeeds] = useState(homeFeeds);
  const onLoadMore = () => {
    setFeeds((feeds) => feeds.concat(homeFeeds));
  };

  return (
    <FeedList
      feeds={feeds}
      onLoadMore={onLoadMore}
    />
  );
}
