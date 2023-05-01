import React from 'react'
import AboutCard from '../Components/commons/AboutCard'
import Navbar from '../Components/commons/Navbar'
import styles from '../Components/commons/style'
import Contact from './ContactMe'

const About = () => {

  return (
    <>
    <div className={`${styles.paddingX} ${styles.flexCenter} bg-bunting`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <section className='section'>
        <AboutCard/>
        <div className='mt-10 bg-sky-200'>
          <Contact/>
        </div>
      </section>
    </>
  )
}

export default About