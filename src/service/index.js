import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api.jokolodang.com/api/v1',
    timeout: 45000,
    headers: {
        'X-Custom-Header': 'foobar',
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
);