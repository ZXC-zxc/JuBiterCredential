<!-- 存证证书 -->
<template>
  <div class="certDiv">
    <cert></cert>
    <div class="btnDiv">
      <div>
        <button @click="licensed()">授权给</button>
        <button @click="exhibit()">出示</button>
      </div>
      <button class="browser-btn" @click="linkBlockChainExploer">区块链浏览器</button>
    </div>
  </div>
</template>

<script>
import cert from "@/components/common/cert.vue";
import { linkBlockChainExploerByTxhash } from "../../assets/api/exploerApi";
export default {
  data: function() {
    return {
      certData: {
        owner: "ABCDEFGHIJK",
        user: "ABCDEFGHIJK"
      }
    };
  },
  components: {
    cert
  },
  created() {
    // alert(this.$route.params.id)
  },
  methods: {
    licensed: function() {
      // alert(this.id)
      this.$router.push({
        path:
          "/Jubiter/cz/copyright/certificate/" +
          this.$route.params.id +
          "/licensed",
        params: {
          id: this.$route.params.id
        }
      });
    },

    exhibit: function() {
      // alert(this.id)
      this.$router.push({
        path:
          "/Jubiter/cz/copyright/certificate/" +
          this.$route.params.id +
          "/exhibit",
        params: {
          id: this.$route.params.id
        }
      });
    },
    linkBlockChainExploer: function() {
      linkBlockChainExploerByTxhash(
        "3FD827671A4FA22162AF5C0D6A6CA888C814A49672C81AF12D4F4F7429F7D3D9"
      );
    }
  }
};
</script>

<style lang="scss" scoped="scoped">
.certDiv {
  width: 100%;
  height: 100%;
  position: relative;
  #certificate {
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 100%;
    .bg {
      position: absolute;
      width: 88%;
      max-width: 900px;
      min-width: 652px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 0;
    }
    .content {
      position: absolute;
      z-index: 1;
      max-width: 670px;
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      // font-size: ;
      div:first-child {
        p {
          display: flex;
          justify-content: flex-start;
          span:first-child {
            font-size: 15px;
            color: #666666;
            font-weight: 600;
            width: 85px;
          }
          span:last-child {
            width: calc(100% - 85px);
            word-break: break-all;
          }
        }
      }
      div:last-child {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
      }
    }
  }
  .btnDiv {
    position: absolute;
    /* margin-top: -10%; */
    z-index: 2;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-between;
    width: 88%;
    max-width: 900px;
    min-width: 652px;
    button {
      border: 0;
      outline: none;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      color: white;
    }
    div {
      button {
        background-color: #1c1c1c;

        width: 120px;
        border: 0;
        margin-right: 20px;
      }
    }
    .browser-btn {
      width: 150px;
      background: #1f61dc;
    }
  }
}
</style>

