<template>
  <section>
    <div class="num">
      <span>消息</span>
      <span>{{ total }}</span>
    </div>
    <ul>
      <li class="active">{{ applys.list }}</li>
    </ul>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      applys: [],
      total: 0
    };
  },
  mounted() {
    this.fetchApplys();
  },
  components: {},
  beforeCreate: function() {},
  methods: {
    fetchApplys() {
      axios
        .post(
          "jubiter-credential-web/admin/apply/list.action",
          {
            data: {
              pageSize: 10,
              pageNumber: 1,
              type: "initiate"
            }
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*", //解决cors头问题
              "Access-Control-Allow-Credentials": "true", //解决session问题
              "Content-Type": "application/json" //将表单数据传递转化为request payload类型
            },
            withCredentials: true
          }
        )
        .then(function(response) {
          var res = response.data;
          applys = res.list;
          total = res.total;
        })
        .catch(function(error) {
          alert(error);
        });
    }
  },
  watch: {
    $route(to, from) {
      fetchApplys();
    }
  }
};
</script>

<style lang="scss" scoped="scoped">
section {
  width: 37%;
  background: #ffffff;
  min-width: 170px;
  max-width: 380px;
  border-right: 1px solid #eff1f3;
  ul {
    margin: 0;
    list-style: none;
    /* margin: 20px 0 0 0; */
    width: 100%;
    padding: 50px 0 0 0;
    li {
      border-bottom: 1px solid #eff1f3;
      padding: 19px 5% 19px 11%;
      font-size: 18px;
      // background: #F6F7FA;
    }
    .active {
      position: relative;
    }
    .active::before {
      content: " ";
      border: 3px solid red; /*设置红色*/
      border-radius: 3px; /*设置圆角*/
      position: absolute;
      // z-index: 1000;
      margin-top: 9px;
      left: 6%;
    }
  }
  .num {
    margin: 55px 20px 0 10%;
    span {
      margin: 0 20px 0 0;
      font-size: 20px;
    }
    span:nth-child(2) {
      padding: 1px 16px;
      background: #eceef0;
      color: #5c6771;
      font-size: 16px;
      border-radius: 16px;
    }
  }
}
</style>

