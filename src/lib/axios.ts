import { default as axiosApi } from 'axios';

const axios = axiosApi.create({
  baseURL: import.meta.env.VITE_SERVER_URL || 'http://localhost:5000',
});

export default axios;
