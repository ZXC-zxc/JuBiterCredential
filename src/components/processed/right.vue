<template>
  <section id="right">
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
#right {
  flex: 1;
  div {
    width: 70%;
    max-width: 546px;
    label {
      display: block;
      margin-bottom: 15px;
      font-size: 18px;
    }
    span {
      display: block;
      min-width: 200px;
      max-width: 600px;
      /* border: 1px solid; */
      min-height: 25px;
	  padding: 10px 15px;
      background-color: white;
      box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.2);
      border-radius: 10px;
	  word-break: break-all;
	  line-height: 25px;
	  
    }
  }
  div:nth-child(1) {
    margin-bottom: 30px;
  }
  .btnDiv{
		  
	  button{
		      float: right;
		      width: 165px;
		      margin-top: 42px;
		      height: 46px;
		      font-size: 17px;
		      letter-spacing: 3px;
		      -webkit-box-shadow: 0 0 27px rgba(0, 0, 0, 0.4);
		      box-shadow: 0 0 27px rgba(0, 0, 0, 0.4);
		      background: #181818;
		      border: 0;
		      outline: none;
		      color: white;
		      border-radius: 8px;
	  }
  }
}
</style>
