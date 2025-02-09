import { useCallback, useEffect, useMemo, useState } from "react";

import "./ProgressBar.style.css";
import { usePlayer } from "../../../providers/PlayerProvider";
import clsx from "clsx";

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
      id="progress__bar"
      type="range"
      max={100}
      value={percentage}
      className={className}
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
