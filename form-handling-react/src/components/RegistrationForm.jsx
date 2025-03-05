import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      username,
      email,
      password,
    };

    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
      </label>
      
      <label>
        Email:
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </label>

      <label>
        Password:
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </label>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;


