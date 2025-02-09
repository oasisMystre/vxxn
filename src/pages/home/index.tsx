import { useState } from "react";

import { Feed } from "../../components/feed/FeedList";
import { homeFeeds } from "../../config/mock/videosource";
import BannerAds from "../../components/ads/BannerAds";
import { bannerAds } from "../../config/mock/adsource";

export function HomePage() {
  const [feeds] = useState(homeFeeds);

  return (
    <>
      <div className="h-100dvh flex flex-col overflow-y-scroll snap-mandatory snap-y scrollbar-none md:space-y-16 md:py-8">
        {feeds.map((feed, index) => (
          <>
            {index % 2 === 1 && (
              <div className="snap-center shrink-0 bg-black p-4 md:hidden">
                <BannerAds {...bannerAds[0]} />
              </div>
            )}
            <Feed
              feed={feed}
              className="h-100dvh md:py-4 md:h-[calc(100dvh-32px)]"
            />
          </>
        ))}
      </div>
    </>
  );
}
