import React, { useState } from 'react'
import styles from '../Components/commons/style';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
  };

  return (
    <section className='section'>
        <div className={`${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>

                <div className="font-poppins mx-auto h-full">
                    <div className='flex flex-col lg:flex-row h-full items-center justify-center pt-16 gap-x-8 text-center lg:text-left'>
                        {/* bg */}
                        <div className='hidden lg:flex absolute bottom-0 left-0 right-0 top-32 -z-10'>

                        </div>
                        {/* text & form*/}
                        <div className='lg:flex-1 top-0 lg:pt-0 px-4 '>
                            <h1 className='font-poppins text-blue-gradient font-semibold ss:text-[82px] text-[32px] '>Contact us</h1>
                            <p className='mb-12'>We would love to get suggestions from you.</p>
                            {/* form */}
                            <form className='flex flex-col gap-y-4' onSubmit={handleSubmit}>
                                <div className='flex gap-x-10'>
                                    <input
                                    type="text" 
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder='Your name'
                                    className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder: text-[#757879]'/>
                                    <input
                                    type="email" 
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Your email address'
                                    className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder: text-[#757879]'/>
                                </div>
                                <input
                                    type="text" 
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder='Your message'
                                    className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder: text-[#757879]'/>
                                    <button type='submit' className='btn mt-10 bg-blue-gradient px-10 py-3 mb-[30px] mx-auto lg:mx-0 self-start'>Send it</button>
                            </form>
                        </div>
                        {/* image */}
                        <div className='lg:flex-1'>
                            <img src="https://media.istockphoto.com/id/1227412970/photo/building-a-strong-team-wooden-blocks-with-people-icon-on-pink-background-human-resources-and.jpg?s=612x612&w=0&k=20&c=KCZjSNoxUMWSnaS6ndGP02rrKyV1Cx2bpBXfNTTq3Uk=" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
    </section>
  )
}

export default Contact