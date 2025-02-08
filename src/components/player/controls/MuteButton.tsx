import clsx from "clsx";

import { useEffect, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { usePlayer } from "../../../providers/PlayerProvider";

type MuteButtonProps = {
  className?: string;
};

export default function MuteButton({ className }: MuteButtonProps) {
  const { muted, setMuted, video } = usePlayer();
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    if (video) {
      video.muted = muted;
      video.volume = volume;
    }
  }, [video, volume, muted]);

  return (
    <div className={clsx("flex space-x-2 items-center p-2 group", className)}>
      <button
        className="text-xl"
        onClick={() => setMuted(!muted)}
      >
        {muted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
      <input
        type="range"
        className="w-16 opacity-0 transition-opacity group-hover:opacity-100"
        min="0"
        max="1"
        step="0.01"
        value={muted ? 0 : volume}
        onChange={(event) => {
          const volume = parseFloat(event.target.value);
          setVolume(volume);
          setMuted(volume === 0);
        }}
      />
    </div>
  );
}
