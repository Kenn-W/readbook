<!-- eslint-disable -->
<template>
  <div class="bg">
    <div class="upper">
      <div class="upper-title">组队中</div>
      <div class="content-center">
        <div class="direction">
          <div class="transverse">
            <el-card class="box-card">
              <div
                slot="header"
                class="clearfix"
                style="text-align: center; margin-bottom: 10px"
              >
                <el-tag type="success  upper-tag">你干嘛</el-tag>
                <el-tag type="success  upper-tag">你干嘛</el-tag>
                <el-tag type="success  upper-tag">哎你干嘛</el-tag>
              </div>
              <div
                class="text item"
                style="margin-top: 15px; margin-left: 15px; margin-right: 15px"
              >
                <b>缺2人</b>
                <el-button
                  style="float: right; padding: 0"
                  type="text"
                  @click="join"
                  >申请加入</el-button
                >
              </div>
              <div
                class="text item"
                style="margin-top: 15px; margin-left: 15px; margin-right: 15px"
              >
                <span>蔡徐坤</span>
                <span style="margin-left: 20px">蔡徐坤</span>
              </div>
              <div
                class="text item"
                style="margin-left: 15px; margin-right: 15px"
              >
                <span>王五</span>
                <span style="margin-left: 20px">王五</span>
              </div>
              <!-- <div class="text item"><span></span> <span style="margin-left: 20px;"></span></div> -->
            </el-card>
          </div>
          <div class="transverse">
            <el-card class="box-card">
              <div
                slot="header"
                class="clearfix"
                style="text-align: center; margin-bottom: 10px"
              >
                <el-tag type="success  upper-tag">跳舞</el-tag>
                <el-tag type="success  upper-tag">rap</el-tag>
                <el-tag type="success  upper-tag">篮球</el-tag>
              </div>
              <div
                class="text item"
                style="margin-top: 15px; margin-left: 15px; margin-right: 15px"
              >
                <b>缺2人</b>
                <el-button
                  style="float: right; padding: 0"
                  type="text"
                  @click="join"
                  >申请加入</el-button
                >
              </div>
              <div
                class="text item"
                style="margin-top: 15px; margin-left: 15px; margin-right: 15px"
              >
                <span>蔡徐坤</span>
                <span style="margin-left: 20px">蔡徐坤</span>
              </div>
              <div
                class="text item"
                style="margin-left: 15px; margin-right: 15px"
              >
                <span>------</span>
                <span style="margin-left: 20px">-------</span>
              </div>
              <!-- <div class="text item"><span></span> <span style="margin-left: 20px;"></span></div> -->
            </el-card>
          </div>
          <div class="transverse">
            <el-card class="box-card">
              <div
                slot="header"
                class="clearfix"
                style="text-align: center; margin-bottom: 10px"
              >
                <el-tag type="success  upper-tag">哎呦你干嘛</el-tag>
                <el-tag type="success  upper-tag">哎呦你干嘛</el-tag>
                <el-tag type="success  upper-tag">哎呦你干嘛</el-tag>
              </div>
              <div
                class="text item"
                style="margin-top: 15px; margin-left: 15px; margin-right: 15px"
              >
                <b>缺2人</b>
                <el-button
                  style="float: right; padding: 0"
                  type="text"
                  @click="join"
                  >申请加入</el-button
                >
              </div>
              <div
                class="text item"
                style="margin-top: 15px; margin-left: 15px; margin-right: 15px"
              >
                <span>蔡徐坤</span>
                <span style="margin-left: 20px">蔡徐坤</span>
              </div>
              <div
                class="text item"
                style="margin-left: 15px; margin-right: 15px"
              >
                <span>------</span>
                <span style="margin-left: 20px">-------</span>
              </div>
              <!-- <div class="text item"><span></span> <span style="margin-left: 20px;"></span></div> -->
            </el-card>
          </div>
          <div class="transverse">
            <el-card class="box-card">
              <div
                slot="header"
                class="clearfix"
                style="text-align: center; margin-bottom: 10px"
              >
                <el-tag type="success  upper-tag">跳舞</el-tag>
                <el-tag type="success  upper-tag">rap</el-tag>
                <el-tag type="success  upper-tag">篮球</el-tag>
              </div>
              <div
                class="text item"
                style="margin-top: 15px; margin-left: 15px; margin-right: 15px"
              >
                <b>缺2人</b>
                <el-button
                  style="float: right; padding: 0"
                  type="text"
                  @click="join"
                  >申请加入</el-button
                >
              </div>
              <div
                class="text item"
                style="margin-top: 15px; margin-left: 15px; margin-right: 15px"
              >
                <span>蔡徐坤</span>
                <span style="margin-left: 20px">蔡徐坤</span>
              </div>
              <div
                class="text item"
                style="margin-left: 15px; margin-right: 15px"
              >
                <span>------</span>
                <span style="margin-left: 20px">-------</span>
              </div>
              <!-- <div class="text item"><span></span> <span style="margin-left: 20px;"></span></div> -->
            </el-card>
          </div>
        </div>
      </div>
      <el-pagination
        background
        style="margin-top: 30px; text-align: center; margin-bottom: 20px"
        layout="prev, pager, next"
        :total="100"
      >
      </el-pagination>
    </div>
    <div class="down">
      <div class="upper-title">未组队</div>
      <div class="content-center">
        <div class="direction">
          <div class="transverse">
            <el-card class="box-card">
              <div class="head-card">
                <div class="user-photo">
                  <img src="../../assets/images/userphoto1.jpg" alt="" />
                </div>
                <div class="title-info">张三 软件工程学院</div>
              </div>
              <div class="tag-card">
                <el-tag type="success  upper-tag">哎呦你干嘛</el-tag>
                <el-tag type="success  upper-tag">哎呦你干嘛</el-tag>
                <el-tag type="success upper-tag">哎呦你干嘛</el-tag>
                <el-tag type="success upper-tag">哎呦你干嘛</el-tag>
              </div>
              <div class="button-card">
                <el-button
                  type="success"
                  size="mini"
                  @click="showDetail"
                  style="margin-left: 10px; margin-right: 30px"
                  >详细信息</el-button
                >
                <el-button type="primary" size="mini" @click="invite"
                  >邀请参加</el-button
                >
              </div>
            </el-card>
          </div>
          <div class="transverse">
            <el-card class="box-card">
              <div class="head-card">
                <div class="user-photo">
                  <img src="../../assets/images/userphoto1.jpg" alt="" />
                </div>
                <div class="title-info">张三 软件工程学院</div>
              </div>
              <div class="tag-card">
                <el-tag type="success  upper-tag">唱歌</el-tag>
                <el-tag type="success  upper-tag">跳舞</el-tag>
                <el-tag type="success upper-tag">rap</el-tag>
                <el-tag type="success upper-tag">篮球</el-tag>
              </div>
              <div class="button-card">
                <el-button
                  type="success"
                  size="mini"
                  style="margin-left: 10px; margin-right: 30px"
                  @click="showDetail"
                  >详细信息</el-button
                >
                <el-button type="primary" size="mini" @click="invite"
                  >邀请参加</el-button
                >
              </div>
            </el-card>
          </div>
          <div class="transverse">
            <el-card class="box-card">
              <div class="head-card">
                <div class="user-photo">
                  <img src="../../assets/images/userphoto1.jpg" alt="" />
                </div>
                <div class="title-info">张三 软件工程学院</div>
              </div>
              <div class="tag-card">
                <el-tag type="success  upper-tag">唱歌</el-tag>
                <el-tag type="success  upper-tag">跳舞</el-tag>
                <el-tag type="success upper-tag">rap</el-tag>
                <el-tag type="success upper-tag">篮球</el-tag>
              </div>
              <div class="button-card">
                <el-button
                  type="success"
                  size="mini"
                  style="margin-left: 10px; margin-right: 30px"
                  @click="showDetail"
                  >详细信息</el-button
                >
                <el-button type="primary" size="mini" @click="invite"
                  >邀请参加</el-button
                >
              </div>
            </el-card>
          </div>
          <div class="transverse">
            <el-card class="box-card">
              <div class="head-card">
                <div class="user-photo">
                  <img src="../../assets/images/userphoto1.jpg" alt="" />
                </div>
                <div class="title-info">张三 软件工程学院</div>
              </div>
              <div class="tag-card">
                <el-tag type="success  upper-tag">唱歌</el-tag>
                <el-tag type="success  upper-tag">跳舞</el-tag>
                <el-tag type="success upper-tag">rap</el-tag>
                <el-tag type="success upper-tag">篮球</el-tag>
              </div>
              <div class="button-card">
                <el-button
                  type="success"
                  size="mini"
                  style="margin-left: 10px; margin-right: 30px"
                  @click="showDetail"
                  >详细信息</el-button
                >
                <el-button type="primary" size="mini" @click="invite"
                  >邀请参加</el-button
                >
              </div>
            </el-card>
          </div>
        </div>
        <br />
        <div class="direction">
          <div class="transverse">
            <el-card class="box-card">
              <div class="head-card">
                <div class="user-photo">
                  <img src="../../assets/images/userphoto1.jpg" alt="" />
                </div>
                <div class="title-info">张三 软件工程学院</div>
              </div>
              <div class="tag-card">
                <el-tag type="success  upper-tag">唱歌</el-tag>
                <el-tag type="success  upper-tag">跳舞</el-tag>
                <el-tag type="success upper-tag">rap</el-tag>
                <el-tag type="success upper-tag">篮球</el-tag>
              </div>
              <div class="button-card">
                <el-button
                  type="success"
                  size="mini"
                  style="margin-left: 10px; margin-right: 30px"
                  @click="showDetail"
                  >详细信息</el-button
                >
                <el-button type="primary" size="mini" @click="invite"
                  >邀请参加</el-button
                >
              </div>
            </el-card>
          </div>
          <div class="transverse">
            <el-card class="box-card">
              <div class="head-card">
                <div class="user-photo">
                  <img src="../../assets/images/userphoto1.jpg" alt="" />
                </div>
                <div class="title-info">张三 软件工程学院</div>
              </div>
              <div class="tag-card">
                <el-tag type="success  upper-tag">唱歌</el-tag>
                <el-tag type="success  upper-tag">跳舞</el-tag>
                <el-tag type="success upper-tag">rap</el-tag>
                <el-tag type="success upper-tag">篮球</el-tag>
              </div>
              <div class="button-card">
                <el-button
                  type="success"
                  size="mini"
                  style="margin-left: 10px; margin-right: 30px"
                  @click="showDetail"
                  >详细信息</el-button
                >
                <el-button type="primary" size="mini" @click="invite"
                  >邀请参加</el-button
                >
              </div>
            </el-card>
          </div>
          <div class="transverse">
            <el-card class="box-card">
              <div class="head-card">
                <div class="user-photo">
                  <img src="../../assets/images/userphoto1.jpg" alt="" />
                </div>
                <div class="title-info">张三 软件工程学院</div>
              </div>
              <div class="tag-card">
                <el-tag type="success  upper-tag">唱歌</el-tag>
                <el-tag type="success  upper-tag">跳舞</el-tag>
                <el-tag type="success upper-tag">rap</el-tag>
                <el-tag type="success upper-tag">篮球</el-tag>
              </div>
              <div class="button-card">
                <el-button
                  type="success"
                  size="mini"
                  style="margin-left: 10px; margin-right: 30px"
                  @click="showDetail"
                  >详细信息</el-button
                >
                <el-button type="primary" size="mini" @click="invite"
                  >邀请参加</el-button
                >
              </div>
            </el-card>
          </div>
          <div class="transverse">
            <el-card class="box-card">
              <div class="head-card">
                <div class="user-photo">
                  <img src="../../assets/images/userphoto1.jpg" alt="" />
                </div>
                <div class="title-info">张三 软件工程学院</div>
              </div>
              <div class="tag-card">
                <el-tag type="success  upper-tag">唱歌</el-tag>
                <el-tag type="success  upper-tag">跳舞</el-tag>
                <el-tag type="success upper-tag">rap</el-tag>
                <el-tag type="success upper-tag">篮球</el-tag>
              </div>
              <div class="button-card">
                <el-button
                  type="success"
                  size="mini"
                  style="margin-left: 10px; margin-right: 30px"
                  @click="showDetail"
                  >详细信息</el-button
                >
                <el-button type="primary" size="mini" @click="invite"
                  >邀请参加</el-button
                >
              </div>
            </el-card>
          </div>
        </div>
      </div>

      <el-pagination
        background
        style="margin-top: 30px; text-align: center; margin-bottom: 30px"
        layout="prev, pager, next"
        :total="100"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamlLobby',
  data() {
    return {
      messageIsShow: false,
      detailVisible: false,
      activeName: 'first',
      messageData1: [
        {
          message: '张三',
          date: '2023-08-01'
        },
        {
          message: '蔡徐坤',
          date: '2023-08-01'
        },
        {
          message: '蔡徐坤',
          date: '2023-08-01'
        },
        {
          message: '蔡徐坤',
          date: '2023-08-01'
        },
        {
          message: '蔡徐坤',
          date: '2023-08-01'
        }
      ],
      detailInfo: {
        id: '10215101474',
        name: '周杰伦',
        gender: '男',
        info1: '66666',
        info2: '88888',
        info3: '99999',
        sleepTime: '9：00',
        age: '103'
      }
    }
  },
  methods: {
    showMessage() {
      this.messageIsShow = true
    },
    showDetail() {
      this.detailVisible = true
    },
    invite() {
      this.$message({
        message: '邀请成功',
        type: 'success'
      })
    },
    join() {
      this.$message({
        message: '申请成功',
        type: 'success'
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
// .bg {
//   margin: 20px 20px;
// }
.bg {
  margin: 20px 20px;
}
.upper {
  margin-left: 20px;
  margin-right: 20px;
  /* height: 200px; */
  /* background-color: red; */
  border-bottom: thin gray solid;
}
.upper-title {
  font-size: 20px;
  margin-left: 20px;
  margin-top: 10px;
}
.content-center {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  .direction {
    flex: 1;
    display: flex;
    .transverse {
      flex: 1;
      margin-top: 10px;
      margin-right: 20px;
      margin-left: 20px;
      /* height: 50px; */
      // background-color: yellowgreen;
    }
  }
}
::v-deep .el-card__body,
.el-main {
  padding: 20px;
  padding-top: 0px !important;
}
.upper-tag {
  margin-right: 10px !important;
}
// ::v-deep .el-tag--medium {
//   height: 35px !important;
//   line-height: 35px !important;
//   width: 65px !important;
// }
::v-deep .el-tag {
  font-size: 15px !important;
}
.down {
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  /* height: 200px; */
  /* background-color: red; */
}
.head-card {
  width: 100%;
  height: 60px;
  padding-top: 5px;
  /* background-color: green; */
  border-bottom: thin solid rgb(238, 241, 246);
}
.user-photo {
  margin-left: 15px;
  margin-bottom: 5px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: red;
  overflow: hidden;
  float: left;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
.title-info {
  /* float: right; */
  display: inline-block;
  margin-left: 20px;
  vertical-align: middle;
  font-size: 15px;
  margin-top: 20px;
  /* background-color: aqua; */
}
.tag-card {
  width: 100%;
  padding-top: 15px;
  padding-left: 10px;
  padding-bottom: 15px;
  text-align: center;
  /* background-color: green; */
  border-bottom: thin solid rgb(238, 241, 246);
}
.button-card {
  width: 100%;
  // height: 30px;
  margin-top: 15px;
  text-align: center;
}
::v-deep #teamLobby .el-table th.el-table__cell {
  overflow: auto !important;
  background-color: transparent !important;
  /*#E6EFFB E6EBF5*/
}
.show-box {
  max-height: 60px;
  overflow: auto;
  font-size: 12px;
}
.dialog-title {
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 30px;
}
</style>
