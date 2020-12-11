import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.1.121.160:3333'
});

export default api;