import { logRoles } from '@testing-library/react';
import React, { useState } from 'react';
import logo from '../Login/logo.png'

function ContactMe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
  };

  return (
    <div>
       <div className="flex justify-center">
          <img 
            alt=""
            className="h-20 w-15"
            src={logo}/>
        </div>
      <br></br>
      <h1>Contact Us</h1>
      <p>Fill out the form below to get in touch with us.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="navbar">
        <ul>
          <li>
            <a href="#">Audios</a>
          </li>
          <li>
            <a href="#">Videos</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactMe;
