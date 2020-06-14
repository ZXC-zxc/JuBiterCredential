<template>
  <div id="add">
    <div class="add-c">
      <el-tabs :tab-position="top" style="height: 200px;">
        <el-tab-pane label="文件上传  /">
          <el-upload
            class="input"
            ref="upload"
            action="jubiter-credential-web/admin/credential/add.action"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-change="handleChange"
            :before-remove="beforeRemove"
            multiple
            :limit="1"
            :on-exceed="handleExceed"
            :file-list="fileList"
            :auto-upload="false"
          >
            <el-button type="primary">
              <img src="@/assets/images/icon/file.png" />
              <span>Select File</span>
            </el-button>
          </el-upload>
          <div class="btnDiv">
            <el-button @click.native="submitUpload()">存证</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="填写Hash">
          <el-form ref="form" :model="form">
            <el-form-item>
              <el-input v-model="form.hash" class="input"></el-input>
            </el-form-item>
          </el-form>
          <div class="btnDiv">
            <el-button @click.native="submit('form')">存证</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import {
  credentialHashAdd,
  credentialAddUrl
} from "../../assets/api/copyrightApi";
export default {
  data() {
    return {
      fileList: [],
      form: {
        hash: ""
      }
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    handleChange(file, fileList) {
      this.fileList = fileList;
    },
    beforeCreat() {
      this.credentialAddUrl = credentialAddUrl;
    },
    submitUpload(content) {
      this.$refs.upload.submit();
    },
    submit() {
      let self = this;
      var param = { hash: self.form.hash };
      credentialHashAdd(param)
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
    }
  }
};
</script>

<style lang="scss">
#add {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .add-c {
    width: 50%;
    max-width: 567px;
    min-width: 440px;
    margin-top: -14%;
    .el-tabs__header {
      margin: 0 0 43px;
    }

    .el-tabs--border-card {
      background: transparent;
      border: 0;
      box-shadow: 0;
    }
    .el-tabs__item {
      padding: 0 3px;
      font-size: 17px;
    }
    .el-tabs__active-bar {
      width: 0 !important;
    }
    .el-tabs__nav-wrap::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background-color: #fafbfe;
      z-index: 1;
    }
    .el-tabs__content {
      overflow: inherit;
      position: relative;
    }
    .el-tabs--border-card > .el-tabs__header {
      background-color: transparent;
      border-bottom: 0;
      margin: 0;
    }
    .el-input__inner {
      height: 49px;
      border-radius: 8px;
      font-size: 16px;
    }
  }
  .tab {
    span {
      font-size: 18px;
    }
  }
  .input {
    // margin: 40px 0 76px 0;
    display: flex;
    box-shadow: 0 0 9px rgba(0, 0, 0, 0.18);
    border-radius: 10px;
    background-color: white;

    div {
      display: flex;
      align-items: center;
      background: white;
      box-shadow: 0 0 13px rgba(0, 0, 0, 0.1);
      border-radius: 9px;
      // padding: 15px 0px;
      p {
        margin: 0;
        display: flex;
        padding: 0 18px;
        font-size: 16px;
        align-items: center;
      }
      .el-button--primary {
        background-color: white;
        border: 0;
        color: #999;
        font-size: 17px;
        border-radius: 8px 0 0 8px;
        border-right: 1px solid #e5e5e5;
        height: 50px;
        line-height: 50px;
        padding: 0 23px;
        img {
          margin-right: 6px;
          width: 20px;
          float: left;
          /* transform-style: flat; */
          float: left;
          margin-top: 12px;
        }
        border-right: 1px solid #e5e5e5;
      }
    }
    ul {
      flex-grow: 1;
      background-color: white;
      font-size: 16px;
      border-radius: 0 8px 8px 0;
    }
    .el-upload-list {
      flex-grow: 1;
    }
  }
  .btnDiv {
    display: flex;
    justify-content: flex-end;
    button {
      background: #181818;
      border: 0;
      color: white;
      width: 34%;
      min-width: 125px;
      max-width: 170px;
      height: 40px;
      border-radius: 8px 8px;
      margin-top: 70px;
      font-size: 17px;
    }
  }
}
</style>