<template>
  <el-row>
    <el-col :span="9">
      <el-card>
        <div slot="header" class="clearfix">
          <div class="img-box">
            <img src="../assets/logo.png" class="img" alt="" />
          </div>
          <div class="user-box">
            <span class="user-name">Admin</span>
            <span class="user-card">超级管理员</span>
          </div>
        </div>
        <div class="login-info">
          <div>
            <span class="login-title">上次登录时间</span>
            <span class="info">12-12-12 10:00</span>
          </div>
          <div>
            <span class="login-title">上次登录地点</span>
            <span class="info">北京</span>
          </div>
        </div>
      </el-card>

      <div class="card-box">
        <!-- <el-table :data="tableData">
          <el-table-column
            v-for="item in titleDate"
            :key="item.label"
            :prop="item.prop"
            :label="item.label"
          >
          </el-table-column>
        </el-table> -->
        <el-table :data="tableData" stripe style="width: auto; height: 413px">
          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </div>
    </el-col>

    <el-col :span="15" class="count-box">
      <el-card v-for="item in countDate" :key="item.name" class="count-cards">
        <div class="count-card">
          <div class="icon-count">
            <i :class="`el-icon-${item.icon}`" class="count-icon"></i>
          </div>

          <div class="price-count">
            <span class="price">￥{{ item.value }}</span>
            <span class="price-name">{{ item.name }}</span>
          </div>
        </div>
      </el-card>
      <div class="line-cart-box">
        <div
          ref="echarts1"
          style="height: 200px; width: 100%"
          class="ech1"
        ></div>
      </div>
      <div class="ceak-column">
        <div class="ceakCon">
          <div
            ref="echarts2"
            style="height: 220px; margin-top: -10px"
            class="ech2"
          ></div>
        </div>
        <div class="ceakCon">
          <div
            style="height: 210px; margin-top: -30px"
            ref="echarts3"
            class="ech2"
          ></div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import { getData } from "@/api";
//todo 按需引入
import * as echarts from "echarts";

export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      titleDate: [
        {
          prop: "name",
          label: "课程",
        },
        {
          prop: "todayBuy",
          label: "今日购买",
        },
        {
          prop: "mouthBuy",
          label: "本月购买",
        },
        {
          prop: "totalBuy",
          label: "总购买",
        },
      ],
      countDate: [
        {
          name: "今日支付订单",
          value: 222,
          icon: "s-goods",
        },
        {
          name: "本月支付订单",
          value: 2311,
          icon: "s-goods",
        },
        {
          name: "今日收藏订单",
          value: 1,
          icon: "s-goods",
        },
        {
          name: "本月收藏订单",
          value: 22,
          icon: "s-goods",
        },
        {
          name: "今日未支付订单",
          value: 11,
          icon: "s-goods",
        },
        {
          name: "本月未支付订单",
          value: 1231,
          icon: "s-goods",
        },
      ],
      allData: {},
    };
  },
  mounted() {
    getData().then(({ data }) => {
      //初始化echarts实例
      const echartsInstance = echarts.init(this.$refs.echarts1);
      const aAxiosData = Object.keys(data.getStateData.data.orderData.data[0]);
      let arr = [];
      aAxiosData.forEach((item) => {
        arr.push({
          name: item,
          data: data.getStateData.data.orderData.data.map((key) => key[item]),
          type: "line",
        });
      });
      //折线图
      //指定图表的配置项和数据
      echartsInstance.setOption({
        xAxis: {
          data: aAxiosData,
        },
        yAxis: {},
        series: arr,
        legend: {
          data: aAxiosData,
        },
      });

      //柱状图
      const echartsZhu = echarts.init(this.$refs.echarts2);
      const userData = data.getStateData.data.userData;
      const axiosData2 = userData.map((item) => item.date);

      echartsZhu.setOption({
        xAxis: {
          data: axiosData2,
        },
        //提示框
        tooltip: {
          trigger: "axis",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        yAxis: {},
        series: [
          {
            data: userData.map((item) => item.new),
            type: "bar",
            name: "新增",
          },
          {
            data: userData.map((item) => item.active),
            type: "bar",
            name: "活跃",
          },
        ],
      });

      //饼状图
      const echartsBin = echarts.init(this.$refs.echarts3);
      const videoData = data.getStateData.data.videoData;

      echartsBin.setOption({
        tooltip: {
          trigger: "item",
        },

        series: [
          {
            type: "pie",
            data: videoData,
          },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      });
    });
  },
};
</script>

<style lang="less" scoped>
@fontSize: 12px;
.clearfix {
  display: flex;
  flex-direction: row;
  .img-box {
    width: 60px;
    height: 60px;
    margin-left: 30px;
    .img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
  .user-box {
    display: flex;
    flex-direction: column;
    margin-left: 60px;
    margin-top: 6px;
    .user-name {
      font-size: 28px;
      font-weight: 600;
      color: black;
    }
    .user-card {
      font-size: 14px;
      color: gray;
    }
  }
}
.login-info {
  margin-left: 30px;
  .login-title {
    font-size: @fontSize;
    color: gray;
  }
  .info {
    font-size: @fontSize;
    color: black;
    margin-left: 70px;
  }
}

.card-box {
  margin-top: 17px;
  height: 30px;
}

.count-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 10px;
  .count-cards {
    width: 32%;
    margin-bottom: 15px;

    .count-card {
      display: flex;
      .icon-count {
        margin-top: 8px;
      }
      .price-count {
        display: flex;
        flex-direction: column;
        margin-left: 13px;
        .price {
          font-weight: 600;
        }
        .price-name {
          font-size: 16px;
          color: gray;
        }
      }
    }
  }
  .line-cart-box {
    height: 180px;
    width: 100%;
    box-shadow: 3px 2px 2px rgb(230, 227, 227);
    .ech1 {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .ceak-column {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 30px;

    .ceakCon {
      width: 48%;
      height: 200px;
      box-shadow: 3px 2px 2px rgb(230, 227, 227);
      .ech2 {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
