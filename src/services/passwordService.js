import axios from 'axios';

export const getPasswords = (token) =>
  axios.get('http://localhost:5000/api/passwords', {
    headers: { Authorization: `Bearer ${token}` },
  });

export const addPassword = (data, token) =>
  axios.post('http://localhost:5000/api/passwords', data, {
    headers: { Authorization: `Bearer ${token}` },
  });
