import React, { useState } from "react";
import ReactPlayer from "react-player";



interface VerticalVideoPlayerProps {
    videoUrl: string;
    videoTitle: string;
    videoTags: string[];
    thumbnailUrl?: string;
}



export const VerticalVideoPlayer: React.FC<VerticalVideoPlayerProps> = ({
    videoUrl,
    videoTitle,
    videoTags,
    thumbnailUrl
}) => {
    const [isReady, setIsReady] = useState(false);



    return (
        <div className="vertical-video-player">
            {/* Loading overlay */}
            {!isReady && (
                <div className="loading-overlay">
                    {thumbnailUrl ? (
                        <img
                            src={thumbnailUrl}
                            alt="Video thumbnail"
                            className="thumbnail-preview"
                        />
                    ) : (
                        <div className="loading-spinner" />
                    )}
                </div>
            )}



            {/* Main video player */}
            <ReactPlayer
                url={videoUrl}
                width="100%"
                height="100%"
                controls
                playing={false}
                light={false}
                onReady={() => setIsReady(true)}
                config={{
                    file: {
                        forceVideo: true,
                        attributes: {
                            controlsList: "nodownload",
                            disablePictureInPicture: true,
                            style: {
                                objectFit: "cover"
                            }
                        }
                    }
                }}
            />



            {/* SEO Metadata Section */}
            <div className="video-metadata">
                <h1 className="video-title">{videoTitle}</h1>
                <div className="video-tags">
                    {videoTags.map((tag, index) => (
                        <span key={index} className="video-tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

