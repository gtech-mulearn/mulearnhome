import axios from "axios";

export const publicGateway = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL || "https://dev.mulearn.org/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

publicGateway.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

publicGateway.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
