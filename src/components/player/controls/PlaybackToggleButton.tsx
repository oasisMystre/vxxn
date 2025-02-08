import clsx from "clsx";
import { FaPause, FaPlay } from "react-icons/fa";
import { useEffect, useState } from "react";

import "./PlaybackToggleButton.style.css";
import { usePlayer } from "../../../providers/PlayerProvider";

type ToggleButtonProps = {
  className?: string;
};

export default function ToggleButton({ className }: ToggleButtonProps) {
  const { playing, setPlaying, video } = usePlayer();
  const [isAnimated, setIsAnimated] = useState(false);

  const handlePlay = () => setPlaying(true);
  const handlePause = () => setPlaying(false);

  useEffect(() => {
    if (video) {
      video.addEventListener("play", handlePlay);
      video.addEventListener("pause", handlePause);

      return () => {
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("pause", handlePause);
      };
    }
  }, [video]);

  return (
    <main
      className="absolute inset-0"
      onClick={() => {
        playing ? video?.play() : video?.pause();
        setIsAnimated(true);
      }}
    >
      <button
        className={clsx(
          className,
          isAnimated ? "animate-pulse" : "!hidden",
          "m-auto size-12 items-center justify-center bg-black text-white rounded-full hidden"
        )}
        onAnimationEnd={() => setIsAnimated(false)}
      >
        {playing ? <FaPause /> : <FaPlay />}
      </button>
    </main>
  );
}
