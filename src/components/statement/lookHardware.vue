<template>
  <div id="hardWareAlert">
	 
	  <div>
		   <img class="close" src="../../assets/images/icon/close.png" @click="closeAlert()"/>
		  <img src="../../assets/images/alertYJ.png" />
	  </div>
    
  </div>
</template>

<script>
import { statementAdd } from "../../assets/api/statementApi";
export default {
  data: function() {
    return {
      content: "",
      to: ""
    };
  },
  mounted() {},
  components: {},
  methods: {
	
	closeAlert(){
	  this.show = true
	  this.$router.push({
		path: "/Jubiter/cz/statement/"
	  });
	}
  }
};
</script>

<style lang="scss" scoped="scoped">
	#hardWareAlert{
		width: 100%;
		height: 100%;
		position: absolute;
		background: rgba(0,0,0,.7);
		margin-left: 40px;
		margin-top: -54px;
		
		div{
			width: 612px;
			height: 500px;
			background: #181818;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 10px;
		}
		img{
			width: 300px;
		}
		.close{
			
			    width: 31px;
			    position: absolute;
			    top: 11px;
			    right: 10px;
		}
	}

</style>

