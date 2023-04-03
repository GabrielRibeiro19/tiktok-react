import React, { useRef, useState } from 'react';
import VideoFooter from './components/footer/VideoFooter';
import VideoSidebar from './components/sidebar/VideoSidebar.js';
import './video.css';

function Video({ likes, messages, shares, name, description, music, src }) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className='video'>
      <video
        className='video__player'
        src={src}
        ref={videoRef}
        onClick={handleStart}
        loop
      ></video>
      {/* Side Bar */}
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
      {/* Footer */}
      <VideoFooter name={name} description={description} music={music} />
    </div>
  );
}

export default Video;
