<!-- 首页--插入硬件 -->
<template>
  <div class="home">
	  <p>军民融合区块链系统</p>
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
import { deviceLogin } from "../assets/api/userApi";
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
          var param = { deviceSn: sn };
          deviceLogin(param)
            .then(function(res) {
              if (res.code == "ok-000000") {
                self.$router.push({
                  path: "/Jubiter/cz/copyright"
                });
              } else {
                alert(res.msg);
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
      var param = { deviceSn: "JUBLD20051200005" };
      deviceLogin(param)
        .then(function(res) {
          if (res.code == "ok-000000") {
            self.$router.push({
              path: "/Jubiter/cz/copyright"
            });
          } else {
            alert(res.msg);
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
  p{
	    position: absolute;
	    top: 0;
	    color: white;
	    margin-top: 70px;
	    font-size: 40px;
	    letter-spacing: 2px;
  }
  .imgDiv {
    width: 100%;
    // margin-top: -5%;
    display: flex;
    justify-content: center;
    position: relative;
    div {
      position: absolute;
      top: 59.7%;
      height: 68px;
      margin-left: 418px;
      animation: myfirst 1.5s;
      img {
        height: 100%;
      }
    }
  }
  .hardware {
    width: 570px;
  }
  h3 {
    color: white;
    font-size: 28px;
    text-align: center;
  }
}

@keyframes myfirst {
  0% {
    margin-left: 1049px;
  }
  100% {
    margin-left: 418px;
  }
}
</style>