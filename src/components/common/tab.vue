<template>
		<div class="tabBar">
			<router-link :to="first.path"   :class="[state=='first'?'active':'tab']">{{first.name}}</router-link>
			<router-link :to="second.path"  :class="[state=='second'?'active':'tab']">{{second.name}}</router-link>
		</div>
</template>

<script>
	export default {
		data: function() {
			return {
				state:"first"
			}
		},
		props:[
			"first",
			"second"
		],
		watch: {	
			$route(to, from) {
				if (to.path == this.first.path ) {
					this.state = "first"
				}
				if (to.path == this.second.path) {
					this.state = "second"
				}
			}
		},
	}
</script>

<style  lang="scss" scoped="scoped">
	a{
		text-decoration: none;
		color: #181818;
	}
	// .tabDiv{
	// 	width: 100%;
	// 	height: 100%;
		.tabBar{
			// margin-top: 30px;
			margin-left: 25px;
			.tab{
				padding: 7px 19px;
				font-size: 15px;
				color: #181818;
				/* background: rebeccapurple; */
				border-radius: 7px;
			}
			.active{
				padding: 7px 19px;
				font-size: 15px;
				background-color: #181818;
				color: white;
				/* background: rebeccapurple; */
				border-radius: 7px;
			}
		}
	// }
</style>
