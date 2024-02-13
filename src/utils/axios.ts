import axios from "axios";

const axiosUsers = axios.create({
  baseURL: process.env.NEXT_PUBLIC_USERS_ROUTES,
});

export default axiosUsers;