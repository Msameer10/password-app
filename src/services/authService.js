import axios from 'axios';

export const login = (email, password) =>
  axios.post('http://localhost:5000/api/users/login', { email, password });

export const signup = (email, password) =>
  axios.post('http://localhost:5000/api/users/signup', { email, password });
