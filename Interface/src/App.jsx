import {React} from 'react'
import './App.css'
import AlbumImg from './assets/CAPA_ALBUM.jpg'
import ProfileImg from './assets/King_Von.jpg'
import { ChevronDown } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Pause } from 'lucide-react';
import { SkipBack } from 'lucide-react';
import { SkipForward } from 'lucide-react';
import { ChevronUp } from 'lucide-react';
import { Speaker } from 'lucide-react';
import { Share } from 'lucide-react';
import { Repeat } from 'lucide-react';
import { Shuffle } from 'lucide-react';
import { ChevronRight } from 'lucide-react';




export default function App() {

  return (
    <>
     <main>
      <section>
        <div id='Back'>
          <ChevronDown width={30} height={30} />
        </div>

        <img src={ProfileImg} className='PERFIL' alt="Perfil" />

        <h1>ROCKSTAR.</h1>

        <p className='FEAT'>
          (feat. 
        </p>   

        <p className='FEAT2'>
          roddy ricch)
        </p>

        <img src={AlbumImg} className='CAPA' alt="Capa Album" />

        <div id='Heart'>
          <Heart width={40} height={40}/>
        </div>

        <p className='Reticence'>
          ...
        </p>

        <div id='Pause'>
          <Pause width={40} height={40} />
        </div>

        <div id='SkipBack'>
          <SkipBack width={40} height={40} />
        </div>

        <div id='SkipForward'>
          <SkipForward width={40} height={40} />
        </div>

        <div id='Lyrics'>
          <ChevronUp width={40} height={40} />
        </div>

        <div id='Speaker'>
          <Speaker width={40} height={40}/>
        </div>

        <div id='Share'>
          <Share width={40} height={40}/>
        </div>

        <div id='Repeat'>
          <Repeat width={30} height={30} />
        </div>

        <div id='Shuffle'>
          <Shuffle width={30} height={30} />
        </div>

        <p className='Footer'>
          Lyrics
        </p>
        
        <p className='Inicio'>
          0:00
        </p>

        <p className='Final'>
          3:01
        </p>

        <button></button>
      </section>
     </main>
    </>
  )
}
