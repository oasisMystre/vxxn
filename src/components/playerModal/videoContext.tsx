import React, { createContext, useContext, useState, ReactNode } from "react";

interface Video {
    id: number;
    url: string;
    title: string;
    author: string;
}

interface VideoContextType {
    videos: Video[];
    setVideos: React.Dispatch<React.SetStateAction<Video[]>>;
    currentIndex: number;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
    playing: boolean;
    setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

const VideoContext = createContext<VideoContextType | undefined>(undefined);

interface VideoProviderProps {
    children: ReactNode;
}

export const VideoProvider: React.FC<VideoProviderProps> = ({ children }) => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [playing, setPlaying] = useState<boolean>(true);

    const value: VideoContextType = {
        videos,
        setVideos,
        currentIndex,
        setCurrentIndex,
        playing,
        setPlaying,
    };

    return <VideoContext.Provider value={value}>{children}</VideoContext.Provider>;
};

export const useVideo = (): VideoContextType => {
    const context = useContext(VideoContext);
    if (!context) {
        throw new Error("useVideo must be used within a VideoProvider");
    }
    return context;
};
