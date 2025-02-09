import clsx from "clsx";
import { useInView } from "react-intersection-observer";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import MuteButton from "./controls/MuteButton";
import ProgressBar from "./controls/ProgressBar";
import PlaybackToggleButton from "./controls/PlaybackToggleButton";
import PlayerProvider from "../../providers/PlayerProvider";

type PlayerProps = {
  src: string;
  className?: string;
  style?: React.CSSProperties;
};

type PlayerRef = {
  element: React.MutableRefObject<HTMLVideoElement | null>;
};

export default forwardRef<PlayerRef, React.PropsWithChildren<PlayerProps>>(
  function Player({ children, src, className, style }, ref) {
    const [playing, setPlaying] = useState(false);

    const [container, inView] = useInView({
      threshold: 0.5,
    });
    const video = useRef<HTMLVideoElement | null>(null);

    const play = useCallback(() => video.current?.play(), [video]);
    const pause = useCallback(() => video.current?.pause(), [video]);

    useImperativeHandle(ref, () => ({
      element: video,
    }));

    useEffect(() => {
      if (import.meta.env.PROD) {
        if (inView) play();
        else pause();
      }
    }, [inView, play, pause]);

    useEffect;

    return (
      <PlayerProvider video={video.current}>
        <div
          ref={container}
          style={style}
          className={clsx(className, "relative flex flex-col")}
        >
          <video
            ref={video}
            src={src}
            className="absolute inset-0 w-full h-full object-cover bg-black sm:rounded-xl"
            loop
            playsInline
            disablePictureInPicture
            onPlaying={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />
          <div
            className={clsx("absolute inset-0 flex flex-col", {
              "playing cursor-pointer": playing,
            })}
          >
            {children}
            <MuteButton className="absolute top-3 left-3 z-100" />
            <PlaybackToggleButton className="z-10" />
            {inView && (
              <ProgressBar className="z-100 absolute bottom-0 md:-bottom-1 inset-x-1 transition-all transition-100 lt-md:hidden md:inset-x-2 " />
            )}
          </div>
        </div>
      </PlayerProvider>
    );
  }
);
