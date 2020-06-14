<template>
  <section>
    <div>
      <label>请求您授权</label>
      <span>{{apply.hash}}</span>
    </div>
    <div>
      <label>给</label>
      <span>{{apply.to}}</span>
    </div>
    <div class="btnDiv">
      <el-button @click.native="submitAuth()">授权</el-button>
    </div>
  </section>
</template>
<script>
import { addCredentialAuthClaim } from "../../assets/api/authApply";
export default {
  props: ["selectedApply"],
  data() {
    return {
      apply: this.selectedApply || { hash: "", to: "" }
    };
  },
  watch: {
    selectedApply: {
      handler: function(newVal, oldVal) {
        if (newVal) {
          this.apply = newVal;
        }
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    submitAuth() {
      let self = this;
      var param = { hash: self.apply.hash, holder: self.apply.to };
      addCredentialAuthClaim(param)
        .then(function(res) {
          if (res.code == "ok-000000") {
            self.$router.push({
              path: "/Jubiter/cz/processed"
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
section {
  flex: 1;
  div {
    width: 70%;
    max-width: 470px;
    label {
      display: block;
      margin-bottom: 20px;
      font-size: 20px;
    }
    span {
      display: block;
      min-width: 200px;
      max-width: 600px;
      /* border: 1px solid; */
      height: 50px;
      background-color: white;
      box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
    }
  }
  div:nth-child(1) {
    margin-bottom: 30px;
  }
}
</style>
