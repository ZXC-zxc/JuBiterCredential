<template>
  <div id="add">
    <div class="relatedDiv">
      <h3>内容</h3>
	  <input v-model="content" type="text" value />
    </div>
    <div class="relatedDiv">
      <h3>相关人</h3>
      <input v-model="to" type="text" value />
    </div>
    <button @click="submit">确定</button>
	<lookHardware v-show="show"></lookHardware>
  </div>
</template>

<script>
import lookHardware from "@/components/statement/lookHardware.vue"
export default {
  data: function() {
    return {
		show:false,
		content: "",
		to: ""
    };
  },
  mounted() {},
  components: {lookHardware},
  methods: {
	  
	  
    submit() {
      let self = this;
	  self.show=true;
      var param = { claimContent: this.content, to: this.to };
      statementAdd(param)
        .then(function(res) {
          if (res.code == "ok-000000") {
			  alert(this.show)
			  this.show = true
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
  position: relative;
  .contentDiv,.relatedDiv {
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
    }
  }
  .relatedDiv {
    flex-direction: row;
    align-items: center;
	margin-bottom: 28px;
    h3 {
      line-height: 55px;
      margin-right: 20px;
	  width: 75px;
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
    margin-top: 42px;
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
  height: 55px;
}
</style>
