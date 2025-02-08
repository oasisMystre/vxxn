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

import ProgressBar from "./controls/ProgressBar";
import PlaybackToggleButton from "./controls/PlaybackToggleButton";
import PlayerProvider from "../../providers/PlayerProvider";
import MuteButton from "./controls/MuteButton";

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
      if (inView) play();
      else pause();
    }, [inView, play, pause]);

    useEffect;

    return (
      <PlayerProvider video={video.current}>
        <div
          ref={container}
          style={style}
          className={clsx(className, "h-screen relative flex flex-col")}
        >
          <video
            ref={video}
            src={src}
            className="absolute inset-0 w-full h-full object-cover rounded-xl"
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
            <MuteButton className="z-100" />
            <PlaybackToggleButton className="z-10" />
            {inView && (
              <ProgressBar className="z-100 absolute -bottom-3.5 inset-x-2 transition-all transition-100" />
            )}
          </div>
        </div>
      </PlayerProvider>
    );
  }
);
