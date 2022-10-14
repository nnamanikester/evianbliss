import axios from "axios";
import config from "../config";

const imgurService = axios.create({
  baseURL: config.IMGUR_API_URL,
});

imgurService.interceptors.request.use(
  (axiosConfig: any) => {
    const token = config.IMGUR_CLIENT_ID;
    if (token) {
      axiosConfig.headers.Authorization = `Client-ID ${token}`;
    }
    return axiosConfig;
  },
  (err: any) => {
    return Promise.reject(err);
  }
);

export { imgurService };
