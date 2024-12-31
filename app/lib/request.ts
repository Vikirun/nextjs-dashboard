import axios from 'axios';

const request = axios.create({
  baseURL: process.env.PUBLIC_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

request.interceptors.request.use(
  (response) => response.data,
  (error) => {
    if (error.response) {
      console.error("请求失败");
      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  }
)

export default request;