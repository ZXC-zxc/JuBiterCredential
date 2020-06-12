<template>
<div>
<el-select
 v-model="typeValue"
 placeholder="请选择包类型"
 @change='typeValChange'
>
 <el-option
  v-for="item in typeData"
  :key="item.id"
  :label="item.label"
  :value="item.id"
  :disabled="item.disabled"
 >
 </el-option>
</el-select>
</div>
</template>
<script>
export default {
name: "AppTypeSelect",
props: {},
data: function() {
return {
 typeData: [{ label: "t1", id: 1 }, { label: "t2", id: 2 }],
 typeValue: ""
};
},
methods: {
typeValChange() {
 console.log(this.typeValue);
 this.$emit("input", this.typeValue);
}
}
};
</script>
<style scoped>
</style>