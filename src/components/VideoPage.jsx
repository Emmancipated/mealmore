import React, {useRef} from "react";
import { useState } from "react";
import video from "../assets/video/production_ID_4281649.mp4";
import { PauseSvg, PlaySvG } from "./Svgs";

const VideoPage = () => {
  const [isPlay, setIsPlay] = useState(false);
  const videoRef = useRef(null);
  
    const handleButtonClick = () => {
      const video = videoRef.current;
      if (video.paused) {
        video.loop = true;
        video.play();
      } else {
        video.loop = false;
        video.pause();
      }
      setIsPlay(!video.paused);
    };   
  
return <section id="VideoPage">
          <div className="videopage-container" onClick={handleButtonClick}>
            <video ref={videoRef} src={video} loop muted/>
            <div className="video-control">{isPlay ? <PlaySvG/> : <PauseSvg/>}</div>
          </div>
        </section>
}

export default VideoPage;
