import styles from "../commons/style";
import Feedback from "./Feedback";
import people01 from '../assets/people01.png'
import people02 from '../assets/people02.png'
import people03 from '../assets/people03.png'


const Testimonials = () => {
  const testimonials = [
    {
      id: "feedback-1",
      content:"Tech Motisha is an amazing resource for anyone looking to build their skills and knowledge in the tech industry.he content is authentic, engaging, and informative." 
       ,
      name: "Faith Kimani",
      title: "Moringa School alumni",
      img: people01,
    },
    {
      id: "feedback-2",
      content:
        "The personalized learning experience has allowed me to focus on my specific interests and goals, and the community-building aspect of the platform has been invaluable for connecting with peers and industry experts.",
      name: "Steve Oluoch",
      title: "Student",
      img: people02,
    },
    {
      id: "feedback-3",
      content:
        "I have been a part of the tech industry for several years now, and I have found Tech Motisha to be an excellent resource for staying connected with the wider community and for discovering new opportunities for growth and development.",
      name: "Maria Nekesa",
      title: "Tech industry expert",
      img: people03,
    },
  ];
  
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
  
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          What People are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
  
      <div className="flex flex-wrap sm:flex-nowrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {testimonials.map((card) => <Feedback key={card.id} {...card} />)}
      </div>
    </section>
  );

}

export default Testimonials