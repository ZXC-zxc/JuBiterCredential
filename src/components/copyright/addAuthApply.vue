<template>
  <div id="add">
    <div class="relatedDiv">
      <h3>著作权hash</h3>
      <input v-model="hash" type="text" value />
    </div>
    <div class="relatedDiv">
      <h3>著作权拥有者地址</h3>
      <br />
      <input v-model="address" type="text" value />
    </div>
    <div class="contentDiv">
      <h3>描述</h3>
      <textarea v-model="descp"></textarea>
    </div>
    <button @click="submit">确定</button>
  </div>
</template>

<script>
import { addCredentialAuthApply } from "../../assets/api/copyrightApi";
export default {
  data: function() {
    return {
      hash: "",
      address: "",
      descp: ""
    };
  },
  mounted() {},
  components: {},
  methods: {
    submit() {
      let self = this;
      var param = { hash: this.hash, owner: this.address, descp: this.descp };
      addCredentialAuthApply(param)
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
#add {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  padding: 55px 40px 55px 60px;
  box-sizing: border-box;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .contentDiv {
    height: 60%;
    textarea {
      height: calc(100% - 100px);
      border: 0;
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.09);
      border-radius: 10px;
      outline: none;
      resize: none;
      box-sizing: border-box;
      padding: 20px;
      font-size: 16px;
	  margin-top: 20px;
    }
  }
  .relatedDiv {
    flex-direction: row;
    align-items: center;
	margin-bottom: 20px;
    h3 {
      // line-height: 55px;
      margin-right: 20px;
	  font-size: 17px;
	  width: 160px;
	      // margin-bottom: 20px;
    }
    input {
      height: 46px;
      border: 1px solid #999;
      border-radius: 6px;
      padding: 0 10px;
      flex-grow: 1;
      font-size: 16px;
      outline: none;
    }
    p {
      margin: 0;
    }
  }
  button {
    width: 165px;
    // margin-top: 42px;
    height: 42px;
    font-size: 17px;
    letter-spacing: 3px;
    box-shadow: 0 0 27px rgba(0, 0, 0, 0.4);
    background: #181818;
    border: 0;
    outline: none;
    color: white;
    border-radius: 8px;
  }
}
h3 {
  margin: 0;
  // height: 55px;
}
</style>
