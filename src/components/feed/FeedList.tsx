import clsx from "clsx";
import { useWindowSize } from "react-use";
import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";

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
}: React.PropsWithChildren<FeedListProps>) {
  const { height: windowHeight } = useWindowSize();

  return (
    <AutoSizer className={clsx(className, "relative")}>
      {({ height, width }) => (
        <InfiniteLoader
          isItemLoaded={(index) => index < feeds.length - 1}
          itemCount={feeds.length}
          loadMoreItems={onLoadMore}
        >
          {({ onItemsRendered }) => (
            <FixedSizeList
              className="flex flex-col overflow-y-scroll snap-mandatory snap-y scrollbar-none"
              width={width}
              height={height}
              itemCount={feeds.length}
              itemSize={windowHeight}
              onItemsRendered={onItemsRendered}
              initialScrollOffset={100}
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
  style?: React.CSSProperties;
  className?: string
};

export const Feed = ({ feed, style, className }: FeedProps) => {
  return (
    <Player
      src={feed.url}
      style={style}
      className={clsx("shrink-0 snap-center", className)}
    />
  );
};
