import axios from 'axios';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

const ajax = axios.create({
  baseURL: serverRuntimeConfig.SERVER_API_URL || process.env.API_URL,
});

export default ajax;
