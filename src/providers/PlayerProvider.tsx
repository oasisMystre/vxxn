import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type PlayerContext = {
  playing: boolean;
  muted: boolean;
  video?: HTMLVideoElement | null;
  setMuted: (status: boolean) => void;
  setPlaying: (status: boolean) => void;
};

export const PlayerContext = createContext<Partial<PlayerContext>>({});

export default function PlayerProvider({
  children,
  video,
}: React.PropsWithChildren & { video?: HTMLVideoElement | null }) {
  const [muted, setMuted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const handleMute = useCallback(() => {
    if (video) setMuted(video?.muted);
  }, [setMuted, video]);
  const handlePlay = useCallback(() => setPlaying(true), [setPlaying]);
  const handlePause = useCallback(() => setPlaying(false), [setPlaying]);

  const $setPlaying = useCallback(
    (status: boolean) => {
      if (status) video?.play();
      else video?.pause();
    },
    [setPlaying, video]
  );

  const $setMuted = useCallback(
    (status: boolean) => {
      if (video) video.muted = status;
      setMuted(status);
    },
    [setMuted, video]
  );

  useEffect(() => {
    if (video) {
      video.addEventListener("play", handlePlay);
      video.addEventListener("pause", handlePause);
      video.addEventListener("volumechange", handleMute);

      return () => {
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("pause", handlePause);
        video.removeEventListener("volumechange", handleMute);
      };
    }
  }, [video]);

  return (
    <PlayerContext.Provider
      value={{
        playing,
        muted,
        setPlaying: $setPlaying,
        video,
        setMuted: $setMuted,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => useContext(PlayerContext) as PlayerContext;
