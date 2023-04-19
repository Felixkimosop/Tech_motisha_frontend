import React from 'react'
import '../About/About.css'
import  software from '../About/assets/html.png'

function About() {
  return (
    <div className='about_container'>
      <div>
        <div className='heading'>
          <h1 className='what-we-do'>
            WHAT <span className='we'>WE </span>DO
          </h1>
          <h1 className='title align-text-middle'>WHAT</h1>
        </div>
   
        <p className='about_description'>Cybersecurity prepRectangle 15Welcome to our community-driven learning platform for students interested in the tech industry! Our mission is to provide you with authentic insights and inspiration from industry experts, Moringa alumni, and staff, empowering you to unlock your potential in the tech space.
        <br />
        At our platform, you'll find a range of content formats, including videos, audio, and articles/blogs, covering a wide range of topics related to the tech industry. We believe that learning is not a solitary experience, which is why our platform is designed to foster a sense of community and collaboration. With customizable interests, personalized recommendations, and the ability to subscribe to categories that interest you, you can connect with like-minded individuals, share content, and engage in discussions on topics that matter to you. Thank you for joining our community, and we look forward to helping you achieve your goals in the tech industry!
        </p>
      </div>
      <div className='courses_grid'>
        <span style={{backgroundColor: 'rgba(14,33,69,1)'}} className='plot montserrat-black-white-20px'>
          <img className='category_logo' src={software} alt="html_icon" />
          software
          </span>
        <span  style={{backgroundColor: 'rgba(16,31,60,1)'}}  className='plot montserrat-black-white-20px'>
        <img className='category_logo' src={software} alt="html_icon" />
          software
          </span>
        <span  style={{backgroundColor: 'rgba(23,43,90,1)'}}  className='plot montserrat-black-white-20px'>
        <img className='category_logo' src={software} alt="html_icon" />
          software
          </span>
        <span style={{backgroundColor: 'rgba(14,33,69,1)'}} className='plot montserrat-black-white-20px'>
        <img className='category_logo' src={software} alt="html_icon" />
          software
          </span>
        <span style={{backgroundColor: 'rgba(14,33,69,1)'}} className='plot montserrat-black-white-20px'>
        <img className='category_logo' src={software} alt="html_icon" />
          software
          </span>
        <span  style={{backgroundColor: 'rgb(20, 33, 59)'}}  className='plot montserrat-black-white-20px'>
          <img className='category_logo' src={software} alt="html_icon" />
          software
          </span>
      </div>
    </div>
  )
}

export default About