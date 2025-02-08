import clsx from "clsx";

type InterstitialAdsProps = {
  className?: string;
};

export default function InterstitialAds({ className }: InterstitialAdsProps) {
  return (
    <div
      className={clsx(
        "flex-1 max-h-[calc(100vh-100px)] mt-auto bg-dark rounded-md",
        className
      )}
    />
  );
}
