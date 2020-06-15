<template>
  <div id="iptBtn">
    <div class="iptBtn-c">
      <h3>{{tempData.title}}</h3>
      <div class="btnDiv">
        <input type="text" v-model="tempData.value" :readonly="tempData.readonly" />
        <button @click="btnclick">{{tempData.btn}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { addCredentialAuthClaim } from "../../assets/api/authApply";
export default {
  data: function() {
    return {
      // id:this.$route.params.id,
    };
  },
  props: ["tempData"],
  created() {},
  methods: {
    toPath: function() {
      // alert(this.id)
      this.$router.push({
        name: this.tempData.path
      });
    },
    btnclick: function() {
      let self = this;
      var param = {
        hash: this.$parent.tempData.hash,
        holder: this.$parent.tempData.value
      };
      self.$socketApi.jubiterOper
        .authorize(param.hash, param.holder)
        .then(() => {
          addCredentialAuthClaim(param)
            .then(function(res) {
              if (res.code == "ok-000000") {
                self.$router.push({
                  path: "/Jubiter/cz/copyright/"
                });
              } else {
                alert(res.msg);
              }
            })
            .catch(function(error) {
              alert(error);
            });
        })
        .catch(function(error) {
          alert(error);
        });
    }
  }
};
</script>

<style lang="scss" scoped="scoped">
#iptBtn {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .iptBtn-c {
    width: 70%;
    // background: red;
    max-width: 567px;
    min-width: 440px;
    margin-top: -180px;
    h3 {
      font-size: 20px;
      margin-bottom: 50px;
    }
    input {
      border: 1px solid #e1e2e3;
      border-right: 0;
      outline: none;
      background: white;
      border-radius: 4px 0 0 4px;
      width: calc(100% - 148px);
      padding: 0 20px;
      font-size: 18px;
    }
  }

  .btnDiv {
    display: flex;
    justify-content: flex-start;
    button {
      background: #181818;
      border: 0;
      color: white;
      width: 148px;
      font-size: 17px;
      height: 47px;
      border-radius: 4px;
      outline: none;
    }
  }
}
</style>

