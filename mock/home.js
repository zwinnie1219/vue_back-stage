import Mock from "mockjs";

let list = [];

export default {
  getStateData: () => {
    for (let i = 0; i < 7; i++) {
      list.push(
        Mock.mock({
          苹果: Mock.Random.float(100, 8000, 0, 0),
          vivo: Mock.Random.float(100, 8000, 0, 0),
          oppo: Mock.Random.float(100, 8000, 0, 0),
          小米: Mock.Random.float(100, 8000, 0, 0),
          三星: Mock.Random.float(100, 8000, 0, 0),
        })
      );
    }
    return {
      code: 200,
      data: {
        //饼图
        videoData: [
          { name: "小米", value: 2999 },
          { name: "苹果", value: 12333 },
          { name: "oppo", value: 1333 },
          { name: "魅族", value: 1222 },
          { name: "三星", value: 3333 },
        ],
        //柱状图
        userData: [
          { date: "周一", new: 121, active: 123 },
          { date: "周二", new: 121, active: 13 },
          { date: "周三", new: 11, active: 123 },
          { date: "周四", new: 121, active: 12 },
          { date: "周五", new: 121, active: 123 },
          { date: "周六", new: 1, active: 123 },
          { date: "周天", new: 121, active: 23 },
        ],
        //折线图
        orderData: {
          date: [
            "2343421",
            "243234",
            "45675767",
            "545657",
            "878765",
            "2343421",
          ],
          data: list,
        },
        tableData: [
          {
            name: "三星",
            todayBuy: 350,
            mouthBuy: 1000,
            totalBuy: 99999,
          },
          {
            name: "小米",
            todayBuy: 88,
            mouthBuy: 1000,
            totalBuy: 6565,
          },
          {
            name: "oppo",
            todayBuy: 123,
            mouthBuy: 567,
            totalBuy: 4546,
          },
          {
            name: "魅族",
            todayBuy: 45,
            mouthBuy: 2346,
            totalBuy: 7676,
          },
          {
            name: "vivo",
            todayBuy: 2324,
            mouthBuy: 5467,
            totalBuy: 67676,
          },
        ],
      },
    };
  },
};
