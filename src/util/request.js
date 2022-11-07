import axios from "axios";

const instance = axios.create({
  baseURL: "api/view",
  timeout: 5000,
});
//请求拦截器
instance.interceptors.request.use(
  function (config) {
    //发请求前做什么
    return config;
  },
  function (error) {
    console.log(error);
  }
);

//响应拦截器

instance.interceptors.response.use(
  function (res) {
    return res;
  },
  function (error) {
    console.log(error);
  }
);
export default instance;
