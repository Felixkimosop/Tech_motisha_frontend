import React, { useState } from 'react';
import './ContactMe.css';

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
      <img
        id="icon"
        src="https://media.istockphoto.com/id/1181069641/vector/initial-letter-tm-logo-line-unique-modern-initial-letter-logo-line-unique-modern.jpg?s=612x612&w=0&k=20&c=fVc1hBctifoXPZwJr-E-8IIZU-pVsL29S5YB2jW956g="
        alt="gym icon"
      />
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
        <div>
      <h1>Contact Us</h1>
      <p>Fill out the form below to get in touch with us.</p>
      </div>
      </div>
    </div>
  );
}

export default ContactMe;
