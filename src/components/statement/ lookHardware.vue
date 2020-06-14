<template>
  <div id="add">
    <div class="contentDiv">
      <h3>内容</h3>
      <textarea v-model="content"></textarea>
    </div>
    <div class="relatedDiv">
      <h3>相关人</h3>
      <input v-model="to" type="text" value />
    </div>
    <button @click="submit">确定</button>
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
   
  }
};
</script>

<style lang="scss" scoped="scoped">

</style>

