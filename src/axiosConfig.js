import axios from "axios";
 const token = localStorage.getItem("token");
const axiosBase = axios.create({
  baseURL: 'https://evangadi-forum-server-21lp.onrender.com', 
});

export default axiosBase;
