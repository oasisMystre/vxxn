import clsx from "clsx";

type InterstitialAdsProps = {
  className?: string;
};

export default function InterstitialAds({ className }: InterstitialAdsProps) {
  return (
    <div
      className={clsx(
        "flex-1 mt-auto bg-dark rounded-md",
        className
      )}
    />
  );
}
