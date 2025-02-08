import clsx from "clsx";
import { useMemo } from "react";
import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { useInView } from "react-intersection-observer";

type SkeletonProps = {
  count: number;
  className?: string;
};

export default function Skeleton({ count, className }: SkeletonProps) {
  const items = useMemo(() => Array.from({ length: count }), [count]);

  return (
    <AutoSizer className={className}>
      {({ height, width }) => (
        <FixedSizeList
          className="flex flex-col overflow-y-scroll snap-mandatory snap-y scrollbar-none"
          width={width}
          height={height}
          itemCount={items.length}
          itemSize={window.innerHeight}
        >
          {() => <SkeletonItem />}
        </FixedSizeList>
      )}
    </AutoSizer>
  );
}

export const SkeletonItem = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={clsx(
        "shrink-0 snap-start h-full w-full transition-all cursor-pointer",
        inView ? "bg-dark animate-pulse animate-duration-2.5s" : "bg-dark"
      )}
    />
  );
};
