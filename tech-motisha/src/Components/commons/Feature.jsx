import React from 'react'
import pencil from '../assets/pencil.svg'
import people from '../assets/people.svg'
import bulb from '../assets/bulb.svg'
import FeatureCard from './FeatureCard'




function Feature() {
    const features = [
        {
          id: "feature-1",
          icon: people,
          title: "Community Building",
          content:
            "Tech Motisha provides a platform for students to connect with one another, share insights, and engage in discussions about the tech industry. ",
        },
        {
          id: "feature-2",
          icon: pencil,
          title: "Customized Learning",
          content:
            "The platform allows students to customize their interests and receive recommendations for content that aligns with their goals and career aspirations. ",
        },
        {
          id: "feature-3",
          icon: bulb,
          title: "Inspiration and Advice",
          content:
            "Students can benefit from the advice and experiences shared by others in the tech industry, including success stories, challenges faced, and tips for career advancement.",
        },
      ];

  return (
    <section className={`rectangle-4 p-10 flex-wrap sm:flex-nowrap`}>
    
    {
      features.map((feature, index)=>(
        <FeatureCard key={feature.id} {...feature} index={index}
        /> 
      ))
    }
    </section>
  )
}

export default Feature