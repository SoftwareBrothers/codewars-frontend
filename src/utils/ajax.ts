import axios from 'axios';

const ajax = axios.create({
  baseURL: process.env.API_URL,
});

export default ajax;
