import FeedList from "../../components/feed/FeedList";
import { homeFeeds } from "../../config/mock/videosource";

export function HomePage() {
  return (
    <main className="flex-1 flex lt-md:flex-col">
      <div className="w-xs bg-black p-2 lt-md:hidden" />
      <div className="mx-auto w-lg lt-md:h-screen">
        <FeedList feeds={homeFeeds} />
      </div>
      <div className="w-xs bg-black lt-md:hidden" />
    </main>
  );
}
