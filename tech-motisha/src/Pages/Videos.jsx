import React from 'react'
import Navbar from '../Components/commons/Navbar'
import styles from '../Components/commons/style'
import AllVideosCard from '../Components/Video/AllVideosCard'


const Videos = () => {
  return (
    <>
    <div className={`${styles.paddingX} ${styles.flexCenter} m-0`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
    </div>
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>    
        <section className='section'>
          <div className='mx-auto h-full relative'>
            {/* text & image wrapper */}
              <div className={`flex flex-col lg:flex-row lg:${styles.paddingY} justify-center`}>
                {/* text */}
                <div className={`flex-1 ${styles.flexStart}  flex-col xl:px-0`}>
                      <div className='lg:pt-0 lg:pb-0 lg:w-auto z-10 w-full flex flex-row justify-between items-center'>
                        <h1 className='flex-1 font-poppins mt-16 font-semibold ss:text-[72px] text-[52px] text-[#031027] ss:leading-[100px] leading-[75px]'>
                        VIDEOS
                        </h1>
                      </div>
                      <p className={`subheading text-primary relative inline ${styles.paragraph} max-w-[470px] mt-5`}>
                        "Discover expert insights, industry trends, and inspiring stories in the tech space through our engaging video content."
                      </p> 
                      <div className='mt-10 bg-blue-gradient px-10 py-3'>
                        Explore
                      </div>
                </div>
                {/* image */}
                <div className='flex justify-end max-h-96 lg:max-h-max'>
                  <div className='relative flex flex-1 lg:-right-20 overflow-hidden mt-10 lg:mt-0 lg:-top-[105px] lg:absolute lg:h-[500px]  lg:-z-10'>
                    <img src='https://media.istockphoto.com/id/612645332/photo/tv-camera-in-a-concert-hall.jpg?s=612x612&w=0&k=20&c=hk1GDpwhSYT8Fuehbd5bjzki6_C4m2w4Tr0cz3ej948=' alt='Camera'/>
                    <div className='absolute z-[0] top[0] w-[35%] h-[35%] pink__gradient'/>
                    <div className='absolute z-[1] bottom-40 w-[80%] h-[80%] white__gradient rounded-full'/>
                    <div className='absolute z-[0] right-20 bottom-20 w-[50%] h-[50%] blue__gradient rounded-full'/>
                </div>
              </div>
            {/* <div className='horizontal'/> */}
              </div>
            </div>
            <AllVideosCard/>
        </section>
      </div>
    </div>
    </>
  )
}

export default Videos