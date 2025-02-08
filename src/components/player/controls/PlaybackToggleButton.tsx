import clsx from "clsx";
import { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

import "./PlaybackToggleButton.style.css";
import { usePlayer } from "../../../providers/PlayerProvider";

type ToggleButtonProps = {
  className?: string;
};

export default function ToggleButton({ className }: ToggleButtonProps) {
  const { playing, setPlaying } = usePlayer();
  const [isAnimated, setIsAnimated] = useState(false);
  const [timer, setTimer] = useState<number | null>(null);

  return (
    <main
      className={clsx("absolute inset-0 flex", className)}
      onClick={() => {
        setPlaying(!playing);
        setIsAnimated(true);
        if (timer) window.clearTimeout(timer);
        const timeout = window.setTimeout(() => {
          setIsAnimated(false);
        }, 900);

        setTimer(timeout);
      }}
    >
      <button
        className={clsx(
          isAnimated ? "flex animate-pulse" : "hidden",
          "m-auto size-12 items-center justify-center bg-black text-white rounded-full"
        )}
        onAnimationEnd={() => setIsAnimated(false)}
      >
        {playing ? <FaPlay /> : <FaPause />}
      </button>
    </main>
  );
}
