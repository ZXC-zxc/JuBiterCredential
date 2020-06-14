<template>
  <div class="process">
    <left v-if="flag"></left>
    <right v-if="flag" :selectedApply.sync="selectedApply"></right>
  </div>
</template>

<script>
import left from "@/components/processed/left.vue";
import right from "@/components/processed/right.vue";
import { changeApplyStatus } from "../../assets/api/authApply";
export default {
  data: function() {
    return {
      flag: false,
      applys: [],
      total: 0,
      selectedApply: { hash: "", to: "", id: 0, status: 0 }
    };
  },
  components: {
    left,
    right
  },
  beforeCreate() {
    var self = this;
    self.$store
      .dispatch("getTableData", {
        pageNumber: 1,
        pageSize: 10,
        tableType: 4
      })
      .then(() => {
        self.applys = self.$store.state.list;
        self.total = self.$store.state.total;
        self.flag = true;
      });
  },
  methods: {
    //子组件调
    showSelectedApply(selectedApply) {
      this.selectedApply.hash = selectedApply.hash;
      this.selectedApply.to = selectedApply.initiaterAddr;
      this.selectedApply.id = selectedApply.id;
      this.selectedApply.status = selectedApply.status;
    },
    changeApplyStatus(param) {
      let self = this;
      changeApplyStatus(param)
        .then(function(res) {
          if (res.code == "ok-000000") {
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

<style  lang="scss" scoped="scoped">
a {
  text-decoration: none;
  color: #181818;
}
.process {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  section {
  }
  ul {
    margin: 0;
  }
  section:nth-child(2) {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}
</style>


