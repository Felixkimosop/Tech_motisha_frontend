import React from 'react'
import features from '../commons/Feature'
import styles from '../commons/style'

const FeatureCard = ({icon, title, content, index}) => {
  return (
    <div className={` flex justify-between flex-col px-10 py-12  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 border-orange-700 border m-3 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
        <div className='flex flex-col'>
            <div className='flex flex-row items-center'>
                <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                    <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
                </div>
                <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                    {title}
                </h4>

            </div>
            <div className="flex-1 flex flex-col ml-3">
                <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
                    {content}
                </p>
            </div>

        </div>
    </div>
  )
}

export default FeatureCard