<!-- 授权给 -->
<template>
  <div class="liscen">
    <inputAndBtn :tempData="tempData"></inputAndBtn>

    <lookHardware v-show="show"></lookHardware>
  </div>
</template>

<script>
import inputAndBtn from "@/components/common/inputAndBtn.vue";
import lookHardware from "@/components/statement/lookHardware.vue";
import { addCredentialAuthClaim } from "../../assets/api/authApply";
export default {
  data: function() {
    return {
      show: false,
      tempData: {
        path: "", //跳转路径
        title: "授权给",
        btn: "授权",
        hash: this.$route.params.hash,
        value: ""
        // readonly:""     //只读：readonly   可输入：" "
      }
    };
  },
  created() {
    // alert(this.$route.params.hash);
  },
  components: {
    inputAndBtn,
    lookHardware
  },
  methods: {
    btnclick: function() {
      let self = this;
      self.show = true;
      var param = {
        hash: this.tempData.hash,
        holder: this.tempData.value
      };
      self.$socketApi.jubiterOper
        .authorize(param.hash, param.holder)
        .then(() => {
          self.show = false;
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
          self.show = false;
          alert(error);
        });
    }
  },
  watch: {}
};
</script>

<style lang="scss" scoped="scoped">
.liscen {
  position: relative;
  width: 100%;
  height: 100%;
  #hardWareAlert[data-v-596074d7] {
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.7);
    /* margin-left: 40px; */
    /* margin-top: -54px; */
    top: 54px;
    left: -41px;
  }
}
</style>

