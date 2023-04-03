import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './pages/Video';
import db from './config/firebase';

import { collection, getDocs } from 'firebase/firestore/lite';

function App() {
  let maxHeight;

  if (window.innerHeight <= 800) {
    maxHeight = window.innerHeight;
  }

  const [video, setVideo] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, 'videos');
    const videosSnapShot = await getDocs(videosCollection);
    const videosList = videosSnapShot.docs.map((doc) => doc.data());
    setVideo(videosList);
  }
  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className='App' style={{ maxHeight: maxHeight + 'px' }}>
      <div className='app__videos'>
        {video.map((item) => (
          <Video
            key={item.description}
            src={item.url}
            likes={item.likes}
            messages={item.messages}
            shares={item.shares}
            name={item.name}
            description={item.description}
            music={item.music}
          />
        ))}

        {/* <Video
          src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4'
          likes={432}
          messages={2000}
          shares={2867}
          name='Larissa Porto'
          description='Zé ruelinha'
          music='Kpop EXO'
        /> */}
      </div>
    </div>
  );
}

export default App;
