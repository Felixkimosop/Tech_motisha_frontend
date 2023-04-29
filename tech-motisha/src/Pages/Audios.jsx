import React from 'react'
import hero_audio from '../assets/hero.png'
import Layout from '../components/Layout'
import styles from '../Components/commons/style'



const Audios = () => {
  return (
    <div className='bg-bunting-gradient -top-[2px] ${styles.flexCenter} -left-2 -right-2 absolute ml-0 -z-[2]'>
      <section className='h-max'>
        <div className='container mx-auto h-full relative'>
          {/* text & image wrapper */}
          <div className={`flex flex-col lg:flex-row lg:${styles.paddingY} justify-center`}>
            {/* text */}
          <div className={` flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className={`lg:pt-0 lg:pb-0 lg:w-auto z-10 flex flex-row justify-between items-center w-full`}>
                <h1 className='lg:flex-1 lg:mt-[220px] bg-white-transparent lg:p-4 p-1 font-poppins mt-16 font-semibold ss:text-[82px] text-[32px] text-white ss:leading-[`100px] leading-[75px] lg:tracking-wider'>
                PODCASTS & <br/>{" "}
                  AUDIOS
                </h1>
            </div>
          </div>
          <div className='flex justify-end max-h-96 lg:max-h-max'>
              <div className='relative flex flex-1 lg:-right-28 mt-10 lg:-mt-20  lg:absolute lg:h-[500px]  lg:-z-10'>
                <img className='lg:-rotate-45 w-[100%] h-[130%] object-contain' src={hero_audio} alt='Camera'/>
                <div className='absolute z-[0] top[0] w-[85%] h-[85%] pink__gradient'/>
                <div className='absolute z-[0] top[0] w-[65%] h-[85%] pink__gradient'/>
                <div className='absolute z-[1] bottom-40 w-[80%] h-[80%] white__gradient rounded-full'/>
                <div className='absolute z-[0] right-20 bottom-20 w-[50%] h-[50%] blue__gradient rounded-full'/>
              </div>
          </div>      
        </div>
      </div>
  </section>

    </div>
  )
}

export default Audios