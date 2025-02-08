import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import AutoSizer from "react-virtualized-auto-sizer";

import Player from "../player";
import type { Video } from "../../lib/api/models";

type FeedListProps = {
  feeds: Video[];
  className?: string;
  onLoadMore: () => void;
};

export default function FeedList({
  feeds,
  className,
  onLoadMore,
}: FeedListProps) {
  return (
    <AutoSizer className={className}>
      {({ height, width }) => (
        <InfiniteLoader
          isItemLoaded={(index) => index < feeds.length - 1}
          itemCount={feeds.length}
          loadMoreItems={onLoadMore}
        >
          {({onItemsRendered}) => (
            <FixedSizeList
              className="flex flex-col overflow-y-scroll snap-mandatory snap-y scrollbar-none"
              width={width}
              height={height}
              itemCount={feeds.length}
              itemSize={window.innerHeight}
              onItemsRendered={onItemsRendered}
            >
              {({ index, style }) => {
                const feed = feeds[index];
                return (
                  <Feed
                    style={style}
                    feed={feed}
                  />
                );
              }}
            </FixedSizeList>
          )}
        </InfiniteLoader>
      )}
    </AutoSizer>
  );
}

type FeedProps = {
  feed: Video;
  style: React.CSSProperties;
};

const Feed = ({ feed, style }: FeedProps) => {
  return (
    <Player
      src={feed.url}
      style={style}
      className="shrink-0 snap-start"
    />
  );
};
