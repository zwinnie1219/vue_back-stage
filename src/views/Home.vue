<template>
  <el-row>
    <el-col :span="9">
      <el-card shadow="hover">
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

      <el-card shadow="hover" class="card-box">
        <el-table :data="tableData">
          <el-table-column
            v-for="item in titleDate"
            :key="item.label"
            :prop="item.prop"
            :label="item.label"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>

    <el-col :span="15" class="count-box">
      <el-card
        v-for="item in countDate"
        :key="item.name"
        class="count-cards"
        shadow="hover"
      >
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
    </el-col>
  </el-row>
</template>
<script>
import { getData } from "@/api";
export default {
  data() {
    return {
      tableData: [
        {
          name: "oppo",
          day: "100",
          mouth: "200",
          all: "1000",
        },
        {
          name: "vivo",
          day: "1400",
          mouth: "2300",
          all: "5000",
        },
        {
          name: "huawei",
          day: "100",
          mouth: "2400",
          all: "3000",
        },
        {
          name: "xiaomi",
          day: "600",
          mouth: "2000",
          all: "3000",
        },
        {
          name: "meitu",
          day: "900",
          mouth: "1000",
          all: "2000",
        },
        {
          name: "meizu",
          day: "100",
          mouth: "600",
          all: "1000",
        },
      ],
      titleDate: [
        {
          prop: "name",
          label: "课程",
        },
        {
          prop: "day",
          label: "今日购买",
        },
        {
          prop: "mouth",
          label: "本月购买",
        },
        {
          prop: "all",
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
    };
  },
  mounted() {
    getData().then((res) => {
      console.log(res);
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
  margin-top: 30px;
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
}
</style>
