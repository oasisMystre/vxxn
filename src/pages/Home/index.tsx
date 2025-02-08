import { useState } from "react";

import FeedList from "../../components/feed/FeedList";
import BannerAds from "../../components/ads/BannerAds";
import Navigation from "../../components/layout/Navigation";
import InterstitialAds from "../../components/ads/InterstitialAds";

import { bannerAds } from "../../config/mock/adsource";
import { homeFeeds } from "../../config/mock/videosource";

export function HomePage() {
  const [feeds, setFeeds] = useState(homeFeeds);
  const onLoadMore = () => {
    setFeeds((feeds) => feeds.concat(homeFeeds));
  };

  return (
    <main className="mx-auto flex-1 flex lt-md:flex-col">
      <div className="w-md flex flex-col bg-black p-4 lt-lg:hidden">
        <InterstitialAds />
      </div>
      <div className="relative w-lg lt-sm:w-screen lt-md:h-screen md:mx-auto md:w-lg">
        <Navigation className="absolute inset-x-0 z-100" />
        <FeedList
          feeds={feeds}
          onLoadMore={onLoadMore}
        />
      </div>
      <div className="w-lg flex flex-col space-y-4 bg-black p-4 lt-md:hidden">
        <InterstitialAds className="flex" />
        <BannerAds
          {...bannerAds[0]}
          className="max-w-xs"
        />
      </div>
    </main>
  );
}
