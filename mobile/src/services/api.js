import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.62.1.128:3333'
});

export default api;