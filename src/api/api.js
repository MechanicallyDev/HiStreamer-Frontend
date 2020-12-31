import axios from 'axios';

const environment = process.env.NODE_ENV;
const baseURL =
  environment === 'development'
    ? 'http://127.0.0.1:3333'
    : 'https://histreamer.com/';

const api = axios.create({ baseURL: `${baseURL}/api/` });

export default api;
