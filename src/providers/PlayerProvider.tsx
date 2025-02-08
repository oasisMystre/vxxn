import { createContext, useContext, useState } from "react";

type PlayerContext = {
  playing: boolean;
  video?: HTMLVideoElement | null;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PlayerContext = createContext<Partial<PlayerContext>>({});

export default function PlayerProvider({
  children,
  ...props
}: React.PropsWithChildren & { video?: HTMLVideoElement | null }) {
  const [playing, setPlaying] = useState(false);

  return (
    <PlayerContext.Provider value={{ playing, setPlaying, ...props }}>
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => useContext(PlayerContext) as PlayerContext;
