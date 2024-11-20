import React from "react";

const VideoBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
            >
                <source src="/assets/bg-video-fixed.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoBackground;
