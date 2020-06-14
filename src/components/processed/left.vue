<template>
  <section>
    <div class="num">
      <span>消息</span>
      <span>{{ total }}</span>
    </div>
    <ul>
      <div v-for="(item,index) in list">
        <li class="active" @click="selectApply(item)">收到{{ item.initiaterAddr }}的授权请求</li>
      </div>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      total: this.$store.state.total,
      list: this.$store.state.list
    };
  },
  methods: {
    selectApply(apply) {
      this.$parent.showSelectedApply(apply);
    }
  }
};
</script>

<style lang="scss" scoped="scoped">
section {
  width: 37%;
  background: #ffffff;
  min-width: 170px;
  max-width: 380px;
  border-right: 1px solid #eff1f3;
  ul {
    margin: 0;
    list-style: none;
    /* margin: 20px 0 0 0; */
    width: 100%;
    padding: 50px 0 0 0;
    li {
      border-bottom: 1px solid #eff1f3;
      padding: 19px 5% 19px 11%;
      font-size: 18px;
      // background: #F6F7FA;
    }
    .active {
      position: relative;
    }
    .active::before {
      content: " ";
      border: 3px solid red; /*设置红色*/
      border-radius: 3px; /*设置圆角*/
      position: absolute;
      // z-index: 1000;
      margin-top: 9px;
      left: 6%;
    }
  }
  .num {
    margin: 55px 20px 0 10%;
    span {
      margin: 0 20px 0 0;
      font-size: 20px;
    }
    span:nth-child(2) {
      padding: 1px 16px;
      background: #eceef0;
      color: #5c6771;
      font-size: 16px;
      border-radius: 16px;
    }
  }
}
</style>