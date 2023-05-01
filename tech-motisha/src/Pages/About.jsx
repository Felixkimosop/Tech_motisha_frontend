import React from 'react'

const About = () => {
  return (
   <section className='section gb-bunting-gradient absolute top-0 -z-[2] right-0 w-full'>
    <div className="container mx-auto h-full relative">
      {/* text & image wrapper */}
      <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
        {/* image */}
        <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
          <img src="https://media.istockphoto.com/id/1300822108/photo/group-of-unrecognisable-international-students-having-online-meeting.jpg?s=612x612&w=0&k=20&c=-X6IUTSdDMfJrFdQFhrDuwhnMrM1BLjfrLzydpibCTA=" alt=""/>
        </div>
        {/* text */}
        <div className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
          <h1>What we do</h1>
          <p className='mb-12 mt-9 text-white ss:text-[18px] text-[12px] max-w-sm'>Welcome to our community-driven learning platform for students interested in the tech industry! Our mission is to provide you with authentic insights and inspiration from industry experts, Moringa alumni, and staff, empowering you to unlock your potential in the tech space.
          <br />
          <br />
          At our platform, you'll find a range of content formats, including videos, audio, and articles/blogs, covering a wide range of topics related to the tech industry. We believe that learning is not a solitary experience, which is why our platform is designed to foster a sense of community and collaboration.
          <br />
          <br />
          With customizable interests, personalized recommendations, and the ability to subscribe to categories that interest you, you can connect with like-minded individuals, share content, and engage in discussions on topics that matter to you. Thank you for joining our community, and we look forward to helping you achieve your goals in the tech industry!
          </p>
        </div>
      </div>
    </div>
   </section>
  )
}

export default About