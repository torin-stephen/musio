import {useState, useEffect} from 'react';
import Player from './components/Player/Player';

function App() {
  const [songs] = useState([
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "./images/song-1.jpg",
      src: "./music/forgetmetoo.m4a"
    },
    {
      title: "Mortals ft Laura Brehm",
      artist: "Warriyo",
      img_src: "./images/Warriyo-1.jpg",
      src: "./music/mortals.m4a"
    },
    {
      title: "Faded",
      artist: "Alan Walker",
      img_src: "./images/faded.jpg",
      src: "./music/faded.m4a"
    },
    {
      title: "on & on",
      artist: "Cartoon",
      img_src: "./images/on&on.jpg",
      src: "./music/on&on.m4a"
    },
    {
      title: "Invincible",
      artist: "Deaf kev",
      img_src: "./images/invincible.jpg",
      src: "./music/invincible.m4a"
    },
    {
      title: "Heroes Tonight",
      artist: "Janji",
      img_src: "./images/song-3.jpg",
      src: "./music/heroestonight.m4a"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
