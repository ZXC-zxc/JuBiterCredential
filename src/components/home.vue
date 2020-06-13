<!-- 首页--插入硬件 -->
<template>
  <div class="home">
    <div class="imgDiv" @click="linkIndex()">
      <img class="hardware" src="@/assets/images/home/hardware.png" />
      <div>
        <img src="../assets/images/home/cable.png" />
      </div>
    </div>
    <h3>请插入JuBiter</h3>
  </div>
</template>

<script>
// const categoryData = require('@/assets/data/category/001.json')
import axios from "axios";
export default {
  data: function() {
    return {
      link: "/",
      categoryList: ""
    };
  },
  components: {},
  mounted() {
    let self = this;
    let interval = setInterval(function() {
      self.$socketApi.jubiterOper
        .getSerialNumber()
        .then(sn => {
          if (sn == "") return;
          clearInterval(interval);
          axios
            .post(
              "jubiter-credential-web/admin/shiro/device/login.action",
              {
                data: { deviceSn: sn }
              },
              {
                headers: {
                  "Access-Control-Allow-Origin": "*", //解决cors头问题
                  "Access-Control-Allow-Credentials": "true", //解决session问题
                  "Content-Type": "application/x-www-form-urlencoded" //将表单数据传递转化为request payload类型
                },
                withCredentials: true
              }
            )
            .then(function(response) {
              var res = response.data;
              if (res.code == "ok-000000") {
                self.$router.push({
                  path: "/Jubiter/cz/copyright"
                });
              } else {
                alert(respresonse.msg);
              }
            })
            .catch(function(error) {
              alert(error);
            });
        })
        .catch((code, msg) => {
          console.log("no key");
        });
    }, 3000);
  },
  methods: {
    linkIndex: function() {
      let self = this;
      axios
        .post(
          "jubiter-credential-web/admin/shiro/device/login.action",
          {
            data: { deviceSn: "JUBLD20051200005" }
          },
          {
            headers: {
              "Access-Control-Allow-Origin": "*", //解决cors头问题
              "Access-Control-Allow-Credentials": "true", //解决session问题
              "Content-Type": "application/x-www-form-urlencoded" //将表单数据传递转化为request payload类型
            },
            withCredentials: true
          }
        )
        .then(function(response) {
          var res = response.data;
          if (res.code == "ok-000000") {
            self.$router.push({
              path: "/Jubiter/cz/copyright"
            });
          } else {
            alert(respresonse.msg);
          }
        })
        .catch(function(error) {
          alert(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped="scoped">
.home {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: url(../assets/images/home/bg.png);
  overflow: hidden;
  .imgDiv {
    width: 100%;
    margin-top: -5%;
    display: flex;
    justify-content: center;
    position: relative;
    div {
      position: absolute;
      /* left: 81.5%; */
      top: 59.7%;
      height: 68px;
      /* transform: translateX(-50%); */
      /* margin-left: 30%; */
      /* margin-left: calc(100% * 0.161); */
      margin-left: 418px;
      animation: myfirst 1.5s;
      img {
        height: 100%;
      }
    }
  }
  .hardware {
    width: 570px;
    // width: 40%;
    // max-width: 610px;
    // min-width: 500px;
  }
  h3 {
    color: white;
    font-size: 28px;
    text-align: center;
  }
}
div {
  // width:100px;
  // height:100px;
  // background:red;
  // position:relative;
  // animation:myfirst 5s;
  // -webkit-animation:myfirst 5s; /* Safari and Chrome */
}

@keyframes myfirst {
  0% {
    margin-left: 1049px;
  }
  // 25%  {margin-left: 1649px;}
  // 50%  {margin-left: 1249px;}
  // 75%  {margin-left: 849px;}
  100% {
    margin-left: 418px;
  }
}
</style>