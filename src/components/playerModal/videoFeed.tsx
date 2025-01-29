import React, { useEffect, useRef } from "react";
import { useVideo } from "./videoContext";
import VideoPlayer from "./playerModal";

const VideoFeed: React.FC = () => {
    const { videos, setVideos, currentIndex, setCurrentIndex } = useVideo();
    const touchStartY = useRef<number | null>(null);

    useEffect(() => {
        // Sample video data
        const fetchedVideos = [
            {
                id: 1,
                url: "https://www.youtube.com/watch?v=K0ibsAQTyRQ",
                title: "Military Training Video",
                author: "John Doe",
            },
            {
                id: 1,
                url: "https://www.youtube.com/watch?v=K0ibsAQTyRQ",
                title: "Military Training Video",
                author: "John Doe",
            },
            // Add more videos
        ];
        setVideos(fetchedVideos);
    }, [setVideos]);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!touchStartY.current) return;

        const currentY = e.touches[0].clientY;
        const diff = touchStartY.current - currentY;

        if (Math.abs(diff) > 50) {
            if (diff > 0 && currentIndex < videos.length - 1) {
                setCurrentIndex((prev) => prev + 1);
            } else if (diff < 0 && currentIndex > 0) {
                setCurrentIndex((prev) => prev - 1);
            }
            touchStartY.current = null;
        }
    };

    return (
        <div
            className="video-feed"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => (touchStartY.current = null)}
        >
            {videos[currentIndex] && <VideoPlayer />}
        </div>
    );
};

export default VideoFeed;
