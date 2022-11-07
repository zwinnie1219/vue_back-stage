import instance from "@/util/request";

//请求首页数据
//首页数据
export const getData = () => {
  return instance.get("home/getData");
};
