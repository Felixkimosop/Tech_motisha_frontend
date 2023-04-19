import React from 'react'
import HeroCard from '../../Components/HeroCard/HeroCard'
import Navbar from '../../Components/NavBar/Navbar'
import hero_image from '../Home/hero_image.png'
import '../Home/Home.css'


function Home() {
 return (
 <div className='home'>
     <Navbar/>
     <div className='hero_container'>
       <div className='hero_content'>
         <h1  className='inter-bold-white-68px nurturing-africas-talent '>
           Nurturing <br/>
           Africa's <span className='rectangle title'>TECH</span>
           <br/>
           Talent
         </h1>
         <p className='value_proposition inter-normal-white-30px'>
         "Unlock your potential in the tech industry with authentic insights and inspiration from industry experts, Moringa alumni, and staff on our community-driven learning platform."
         </p>
       </div>
       <img className='hero_image' src={hero_image} alt="janus-head-human-robotic-" />
     </div>
     <div className='rectangle-4'>
        <HeroCard style={{marginLeft: '0.5rem'}}/>
        <HeroCard className= 'card2'/>
        <div className='overlap-group2'>
            <p className='highlights2 inter-bold-white-36px'>Highlighting the importance of tech
            </p>           
            <p className='highlight_content2 inter-normal-oslo-gray-30px'>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu massa quis ut eu lorem
            </p>
        </div>  
    </div>

     
 </div>
 )
}


export default Home