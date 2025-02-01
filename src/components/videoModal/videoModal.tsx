import React from "react";
import VideoPlayerModal from "../videoPlayer/videoPlayer";
import { X } from "lucide-react";

type ContentViewProps = {
    imageUrl: string;
    onClose: () => void;
};

export function VideoModal({ imageUrl, onClose }: ContentViewProps) {
    React.useEffect(() => {
        document.body.classList.add("overflow-hidden");
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);
    return (
        <div className='fixed inset-0 backdrop-blur-2xl bg-black/30 z-[200]'>
            {/* Main Content Area */}
            <div className='w-full h-full relative'>
                <div className='absolute h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <div className='w-[400px] h-full relative'>
                        <VideoPlayerModal />
                        <button
                            onClick={onClose}
                            className="absolute bg-gray-800 p-1 rounded-full top-10 left-[-100px] text-gray-300"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}