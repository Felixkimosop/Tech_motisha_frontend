import { useState } from 'react';

function SubscriptionForm({ onSubscribe }) {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [showEmailError, setShowEmailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && isValidEmail) {
      onSubscribe(email); 
      setSubscribed(true);
    } else {
      setShowEmailError(true);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(validateEmail(e.target.value));
    setShowEmailError(false);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="subscribe-container w-full">
      <p className="font-medium mb-2">Subscribe to our newsletter</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          className="border-2 border-gray-800 rounded-md mb-2 p-2 w-full text-base text-gray-800"
          onChange={handleEmailChange}
          placeholder="Enter your email address"
          style={{ borderColor: isValidEmail || !showEmailError ? 'initial' : 'red' }}
        />
        {showEmailError && <p>Please enter a valid email address.</p>}
        <button type="submit" className="bg-indigo-800 text-white py-2 px-4 rounded hover:bg-indigo-700" disabled={subscribed}>
          {subscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
}

export default SubscriptionForm;