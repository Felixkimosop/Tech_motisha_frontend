import React, { createRef, useRef, useState } from 'react'
import hero_audio from '../Components/assets/hero.png'
import styles from '../Components/commons/style'
import AudioPlayer from '../Components/Audio/AudioPlayer'
import Navbar from '../Components/commons/Navbar'
import musicData from '../Components/assets/music';
import AddSongForm from '../Components/Audio/SongForm';
import sound_wave from '../Components/assets/sound.png'


const Audios = () => {
  const audioRef = useRef(musicData.map(() => createRef()));
  const [songs, setSongs] = useState(musicData);
  const [showForm, setShowForm] = useState(false);

  const handleAddSong = (newSong) => {
    setSongs([...songs, newSong]);
    setShowForm(false);
  };


  const handleNewSongClick = () => {
    setShowForm(true);
  };


  return (
    <>
      <div className={`${styles.paddingX} ${styles.flexCenter} m-0`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
        <div className={`bg-bunting-gradient -top-[2px] -left-2 -right-2 absolute -z-[2]`}>
        
        <section className='h-max'>
          <div className='mx-auto h-full relative'>
            {/* text & image wrapper */}
            <div className={`flex flex-col lg:flex-row lg:${styles.paddingY} justify-center`}>
              {/* text */}
            <div className={` flex-1 ${styles.flexStart} flex-col mt-20 xl:px-0 sm:px-16 px-6`}>
              <div className={`lg:pt-0 gap-3 lg:pb-0 lg:w-auto z-10 flex flex-col justify-between w-full`}>
                  <h1 className='lg:flex-1 lg:mr-9 lg:mt-[220px] bg-white-transparent lg:p-4 p-1 font-poppins mt-18 font-semibold ss:text-[72px] text-[32px] text-white ss:leading-[`100px] leading-[75px] lg:tracking-wider'>
                  PODCASTS & <br/>{" "}
                    AUDIOS
                  </h1>
                  {/* {showForm && <AddSongForm onAddSong={handleAddSong} />}
                  <div>
                    <button className={`add-song-button ml-3 mr-0 py-2 px-4 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`} onClick={handleNewSongClick}>Add New Audio</button>
                  </div> */}
              </div>
            </div>
            <div className='flex justify-end max-h-96 lg:max-h-max'>
                <div className='relative flex flex-1 lg:-right-28 mt-10 lg:-mt-20  lg:absolute lg:h-[500px] lg:-z-10'>
                  <img className='lg:-rotate-[25deg] w-[100%] h-[130%] object-contain' src={hero_audio} alt='Camera'/>
                  {/* <div className='lg:-rotate-[deg] absolute z-[0] lg:top-[523px] lg:-right-[px] w-[80%] h-[80%]  billboard__fadeBottom'/> */}
                  <div className='absolute z-[0] top[0] w-[65%] h-[85%] white__gradient'/>
                  <div className='absolute z-[1] bottom-40 w-[80%] h-[80%] white__gradient rounded-full'/>
                   {/* <div className='absolute z-[0] right-20 bottom-20 w-[50%] h-[50%] blue__gradient rounded-full'/> */}
                </div>
            </div> 
            <div className='relative flex flex-1 mt-72 lg:absolute lg:h-[550px] lg:-z-10'>
              <img className='w-[100%] h-[130%] object-contain' src={sound_wave} alt="sound wave" />
            </div>     
          </div>
        </div>
        {/* <div className=' absolute z-[-1] lg:top-[470px] lg:-left-[0px] w-[50%] h-[80%]  billboard__fadeBottom'/>
        <div className=' absolute z-[-1] lg:top-[470px] lg:-left-[0px] h-[80%]  billboard__fadeBottom'/>
        <div className='absolute z-[-1] lg:top-[470px] lg:-left-[500px] h-[80%]  billboard__fadeBottom'/> */}
    </section>
    <AudioPlayer/>
      </div>
    </>
  )
}

export default Audios