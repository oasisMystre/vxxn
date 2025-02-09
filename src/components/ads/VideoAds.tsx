import clsx from "clsx";

type VideoAdsProps = {
  src: string;
  className?: string;
};
export default function VideoAds({ src, className }: VideoAdsProps) {
  return (
    <video
      src={src}
      className={clsx(className, "rounded-xl")}
      playsInline
      disablePictureInPicture
      muted
      autoPlay
    />
  );
}
