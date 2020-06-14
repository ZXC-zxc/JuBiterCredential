<!-- 授权给 -->
<template>
  <inputAndBtn :tempData="tempData"></inputAndBtn>
</template>

<script>
import inputAndBtn from "@/components/common/inputAndBtn.vue";
export default {
  data: function() {
    return {
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
    inputAndBtn
  },
  methods: {},
  watch: {}
};
</script>

<style lang="scss" scoped="scoped">
</style>

