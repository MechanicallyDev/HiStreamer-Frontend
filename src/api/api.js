import axios from 'axios';

const baseURL = 'https://histreamer.com/'; //'http://127.0.0.1:3333';

const api = axios.create({ baseURL: `${baseURL}/api/` });

export default api;

const files = axios.create({ baseURL: `${baseURL}/files/` });

export { files };
