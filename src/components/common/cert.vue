<template>
  <div id="certificate">
    <img class="bg" src="@/assets/images/CZbg.png" />
    <div class="content">
      <div>
        <p>
          <span>所有人</span>
          <span>Avfdvcsv88888888DDDDDDDDDDDDD88888888888DDDDDDDdDDD</span>
        </p>
        <p>
          <span>可使用者</span>
          <span>AvfdvcsD88888888888DDDDDDDdDDD</span>
        </p>
        <p>
          <span>著作权指纹(HASH)</span>
          <span>AvfdDDDDDDDDDDD88888888888DDDDDDDdDDD</span>
        </p>
        <p>
          <span>创建时间</span>
          <span>2020-02-25</span>
        </p>
      </div>
      <div>
        <p>
          <span>颁发日期:</span>
          <span>2020年2月25日</span>
        </p>
        <p>
          <span>飞天诚信</span>
          <span>2020年2月25日</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  props: [],
  watch: {}
};
</script>

<style  lang="scss" scoped="scoped">
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
}
</style>