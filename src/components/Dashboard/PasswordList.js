import React from 'react';
import './Dashboard.css';

const PasswordList = () => {
  const passwords = [
    { appName: 'Google', password: '*****' },
    { appName: 'Facebook', password: '*****' },
  ];

  return (
    <ul className="password-list">
      {passwords.map((item, index) => (
        <li key={index}>
          <strong>{item.appName}</strong>: {item.password}
        </li>
      ))}
    </ul>
  );
};

export default PasswordList;