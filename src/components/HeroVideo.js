import React, { useRef, useEffect } from "react";
import video from "../assets/VideoHeader.mp4";

function HeroVideo() {
  const videoRef = useRef();

  useEffect(() => {
    const handlePlayVideo = () => {
      videoRef.current.play();
    };

    window.addEventListener("load", handlePlayVideo);

    return () => {
      window.removeEventListener("load", handlePlayVideo);
    };
  }, []);

  return (
    <div
      onClick={() => videoRef.current.play()}
      style={{
        // position: "fixed",
        width: "100%",
        // left: 0,
        // top: 0,
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          // position: "fixed",
          width: "100%",
          // left: 0,
          // top: 0,
        }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default HeroVideo;
