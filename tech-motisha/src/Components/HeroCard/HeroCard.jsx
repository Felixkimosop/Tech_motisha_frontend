import React from 'react'
import { NavLink } from 'react-router-dom'
import '../HeroCard/HeroCard.css'

function HeroCard() {
  return (
    <>
    <div className='card overlap-group1'>
        <p className='highlights inter-bold-white-36px'>Highlighting the importance of tech
        </p>           
        <p className='highlight_content inter-normal-oslo-gray-30px'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu massa quis ut eu lorem
        </p>
        <NavLink className='overlap-group-1 inter-bold-white-30px' to='/about'>
            About <span><i className="angle double right" /></span>
        </NavLink> 
    </div>    
    </>
  )
}

export default HeroCard