import React from 'react'
import styles from '../Components/commons/style'
import hero_image from '../Components/assets/hero_image.png'
import Stats from '../Components/commons/Stats'
import Feature from '../Components/commons/Feature'
import Testimonials from '../Components/commons/Testimonials'

const Home = () => {
  return (
     // On Medium devices:
     <div>

        <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
          {/* <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'></div> */}
          <div className='flex flex-row justify-between items-center w-full'>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
              Nurturing <br className='sm:block hidden'/> {" "}
              Africa's<span className='rectangle title text-white ml-3'>TECH</span>
              <br/>{" "}
            </h1>
            {/* <div className='ss:flex hidden md:mr-4 mr-0'>
              <GetStarted/>
            </div> */}
          </div>
          <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
          Talent
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            "Unlock your potential in the tech industry with authentic insights and inspiration from industry experts, Moringa alumni, and staff on our community-driven learning platform."
          </p>
        </div>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
          <img className='w-[100%] h-[100%] relative z-[5] object-cover' src={hero_image} alt='janus-head-human-robotic-'/>
          <div className='absolute z-[0] top[0] w-[35%] h-[35%] pink__gradient'/>
          <div className='absolute z-[1] bottom-40 w-[80%] h-[80%] white__gradient rounded-full'/>
          <div className='absolute z-[0] right-20 bottom-20 w-[50%] h-[50%] blue__gradient rounded-full'/>
        </div>
      </section>
      <Stats/>
      <Feature className='px-0'/>
      <Testimonials/>
       
        
      
     </div>
  )
}

export default Home