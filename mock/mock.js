import Mock from "mockjs";
import getStateData from "./home";

//请求地址：域名后面一段内容

//主页数据
Mock.mock("api/view/home/getData", getStateData);
