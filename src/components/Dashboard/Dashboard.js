import React from 'react';
import Navbar from '../Navbar';
import PasswordList from './PasswordList';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <h1>Your Saved Passwords</h1>
        <PasswordList />
      </div>
    </div>
  );
};

export default Dashboard;
