import React from 'react'
import styles from '../commons/style'

const AboutCard = () => {
    const about = [
        {
            id: 1,
            title: "Our Mission",
            desc: "Welcome to our community-driven learning platform for students interested in the tech industry! Our mission is to provide you with authentic insights and inspiration from industry experts, Moringa alumni, and staff, empowering you to unlock your potential in the tech space.!",
            img: "https://images.unsplash.com/photo-1604145559206-e3bce0040e2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGNvZGluZyUyMGxlYXJuaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          },
          {
            id: 3,
            title: "What we do",
            desc: "At our platform, you'll find a range of content formats, including videos, audio, and articles/blogs, covering a wide range of topics related to the tech industry. We believe that learning is not a solitary experience, which is why our platform is designed to foster a sense of community and collaboration.",
            img: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGNvZGluZyUyMGxlYXJuaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          },
          {
            id: 2,
            title: "Our Vision",
            desc: "To empower and inspire the next generation of tech leaders by providing authentic and verified information, inspiration, and advice in a community-driven platform that fosters continuous learning and growth!",
            img: "https://images.pexels.com/photos/9432945/pexels-photo-9432945.jpeg?auto=compress&cs=tinysrgb&w=400",
          },
        
        ];

        const getText = (html) =>{
            const doc = new DOMParser().parseFromString(html, "text/html")
            return doc.body.textContent
          }

  return (
    <div className="about">
      <div className='flex flex-col gap-20'>
        {about.map((post) => (
          <div className="lg:ml-24 flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16 lg:about_content" key={post.id}>
            <div className="flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
              <img className='w-[100%] max-h-80 rounded-lg object-cover' src={post.img} alt="" />
            </div>
            <div className="flex flex-shrink-2 w-[50%]  flex-col justify-evenly">
              {/* <Link className="link" to={`/post/${post.id}`}> */}
                <div>
                  <h1 className='flex-1 font-semibold font-poppins ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]'>{post.title}</h1>
                </div>
              {/* </Link> */}
              <p className={`${styles.paragraph} text-primary max-w-[470px]`}>{getText(post.desc)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutCard