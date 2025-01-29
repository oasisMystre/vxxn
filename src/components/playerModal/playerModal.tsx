import React, { useRef } from "react";
import ReactPlayer from "react-player";
import { useVideo } from "./videoContext";

const VideoPlayer: React.FC = () => {
  const { videos, currentIndex, playing, setPlaying } = useVideo();
  const playerRef = useRef<ReactPlayer | null>(null);

  if (!videos[currentIndex]) return null;

  return (
    <div className="video-wrapper">
      <ReactPlayer
        ref={playerRef}
        url={videos[currentIndex].url}
        width="100%"
        height="100%"
        playing={playing}
        loop
        playsinline
        muted={false}
        controls={false}
        config={{
          file: {
            attributes: {
              controlsList: "nodownload",
            },
          },
        }}
        onReady={() => setPlaying(true)}
        onError={(e) => console.error("Video Error:", e)}
      />
      <div className="video-overlay">
        <h3>{videos[currentIndex].title}</h3>
        <p>{videos[currentIndex].author}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
