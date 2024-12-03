import React, { useState } from 'react';
import './Dashboard.css';

const AddPassword = ({ onAdd }) => {
  const [appName, setAppName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ appName, password });
    setAppName('');
    setPassword('');
  };

  return (
    <form className="add-password-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="App Name"
        value={appName}
        onChange={(e) => setAppName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Add Password</button>
    </form>
  );
};

export default AddPassword;
