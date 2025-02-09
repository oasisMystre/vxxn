import clsx from "clsx";
import { useRef } from "react";
import PlayerProvider from "../../providers/PlayerProvider";
import MuteButton from "../player/controls/MuteButton";
import PlaybackToggleButton from "../player/controls/PlaybackToggleButton";

type VideoAdsProps = {
  src: string;
  className?: string;
};
export default function VideoAds({ src, className }: VideoAdsProps) {
  const video = useRef<HTMLVideoElement | null>(null);

  return (
    <PlayerProvider video={video.current}>
      <div className={clsx("relative flex flex-col cursor-pointer", className)}>
        <video
          ref={video}
          src={src}
          className="h-lg w-full absolute inset-0 rounded-xl object-cover z-0 overflow-y-hidden"
          playsInline
          disablePictureInPicture
          muted
          autoPlay={import.meta.env.PROD}
        />
        <MuteButton className="absolute top-2 left-2 z-20" />
        <PlaybackToggleButton className="absolute z-10" />
      </div>
    </PlayerProvider>
  );
}
