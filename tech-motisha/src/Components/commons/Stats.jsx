import React from 'react'
import styles from '../commons/style'

const Stats = () => {
  const stats=[
    {title: "Graduates", value: "3000+"},
    {title: "Employer Partners", value: "300+"},
    {title: "Employement Rate", value: "85%"},


  ]
  return (
    <div>
      <section className={`flex-row flex-wrap sm:mb-20 mb-6 ${styles.flexCenter}`}>
        {
          stats.map((stat)=>(
            <div key={stat.name} className={`flex-1 flex justify-start items-center flex-row m-3`}>
              <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading[43px] text-white'>{stat.value}</h4>
              <p className='font-poppins font-normal xs:text-[20px] text-[10px] xs:leading-[26px] leading[21px] text-gradient uppercase ml-3'>{stat.title}</p>
            </div>
          ))
        }
      </section>
    </div>
  )
}

export default Stats