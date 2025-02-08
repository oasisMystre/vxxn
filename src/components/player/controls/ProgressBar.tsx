import clsx from "clsx";
import { useCallback, useEffect, useMemo, useState } from "react";

import "./ProgressBar.style.css";
import { usePlayer } from "../../../providers/PlayerProvider";

type ProgressBarProps = {
  className?: string;
};

export default function ProgressBar({ className }: ProgressBarProps) {
  const { video } = usePlayer();
  const [progress, setProgress] = useState(0);

  const percentage = useMemo(
    () => (video ? (progress / video.duration) * 100 : 0),
    [progress, video]
  );

  const onTimeUpdate = useCallback(() => {
    if (video) setProgress(video.currentTime);
  }, [video]);

  useEffect(() => {
    if (video) {
      video.addEventListener("timeupdate", onTimeUpdate);
      return () => video.removeEventListener("timeupdate", onTimeUpdate);
    }
  }, [video, onTimeUpdate]);

  return (
    <input
      type="range"
      className={className}
      max={100}
      value={percentage}
      onChange={(event) => {
        if (video) {
          const progress =
            (parseFloat(event.target.value) / 100) * video.duration;
          video.currentTime = progress;
          setProgress(progress);
        }
      }}
    />
  );
}
