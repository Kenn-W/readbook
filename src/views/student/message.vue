<!-- eslint-disable -->
<template>
  <div class="bg">
    <div class="content-center">
      <div class="direction">
        <div class="transverse">
          <h1 style="margin-left: 20px">综合消息</h1>
          <div style="padding: 0 10px">
            <el-table
              :data="messageData1"
              stripe
              style="width: 100%"
              :show-header="false"
            >
              <el-table-column prop="message" label="内容" width="200">
                <template v-slot="scope">
                  <div
                    class="show-box"
                    v-if="messageData1[scope.$index].type == '1'"
                  >
                    {{ messageData1[scope.$index].message }}拒绝了您的邀请
                  </div>
                  <div
                    class="show-box"
                    v-if="messageData1[scope.$index].type == '2'"
                  >
                    {{ messageData1[scope.$index].message }}拒绝了您的申请
                  </div>
                  <div
                    class="show-box"
                    v-if="messageData1[scope.$index].type == '3'"
                  >
                    向{{ messageData1[scope.$index].message }}的信息发送成功
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="date" label="日期">
                <template v-slot="scope">
                  <div class="show-box">
                    {{ messageData1[scope.$index].date }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="操作" align="right">
                <div class="show-box">
                  <el-button type="danger" size="mini">删除</el-button>
                </div>
              </el-table-column>
            </el-table>
          </div>
          <el-pagination
            background
            style="position: absolute; bottom: 30px; left: 12%"
            layout="prev, pager, next"
            :total="100"
          >
          </el-pagination>
        </div>
        <div class="transverse">
          <h1 style="margin-left: 20px">向您申请</h1>
          <div style="padding: 0 10px">
            <el-table
              :data="messageData1"
              stripe
              style="width: 100%"
              :show-header="false"
            >
              <el-table-column prop="message" label="内容">
                <template v-slot="scope">
                  <div class="show-box">
                    {{ messageData1[scope.$index].message }}申请加入您的寝室
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="date" label="日期" width="100">
                <template v-slot="scope">
                  <div class="show-box">
                    {{ messageData1[scope.$index].date }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="操作" align="right" width="220">
                <div class="show-box">
                  <el-button type="primary" size="mini" @click="showDetail"
                    >详情</el-button
                  >
                  <el-button type="success" size="mini">同意</el-button>
                  <el-button type="danger" size="mini">拒绝</el-button>
                </div>
              </el-table-column>
            </el-table>
          </div>
          <el-pagination
            background
            style="position: absolute; bottom: 30px; left: 12%"
            layout="prev, pager, next"
            :total="100"
          >
          </el-pagination>
        </div>
        <div class="transverse">
          <h1 style="margin-left: 20px">对您邀请</h1>
          <div style="padding: 0 10px">
            <el-table
              :data="messageData1"
              stripe
              style="width: 100%"
              :show-header="false"
            >
              <el-table-column prop="message" label="内容">
                <template v-slot="scope">
                  <div class="show-box">
                    {{ messageData1[scope.$index].message }}邀请您加入他的寝室
                  </div>
                </template>
              </el-table-column>
              <el-table-column prop="date" label="日期" width="100">
                <template v-slot="scope">
                  <div class="show-box">
                    {{ messageData1[scope.$index].date }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="操作" align="right" width="210">
                <div class="show-box">
                  <el-button type="primary" size="mini" @click="showDetail"
                    >详情</el-button
                  >
                  <el-button type="success" size="mini">同意</el-button>
                  <el-button type="danger" size="mini">拒绝</el-button>
                </div>
              </el-table-column>
            </el-table>
          </div>
          <el-pagination
            background
            style="position: absolute; bottom: 30px; left: 12%"
            layout="prev, pager, next"
            :total="100"
          >
          </el-pagination>
        </div>
      </div>
    </div>
    <!--详细信息对话框-->
    <el-dialog v-model:visible="detailVisible" width="40%">
      <div :model="detailInfo" class="dialog-title">
        {{ detailInfo.name }} {{ detailInfo.id }}
      </div>
      <el-descriptions column="1" :model="detailInfo">
        <el-descriptions-item label="性别">{{
          detailInfo.gender
        }}</el-descriptions-item>
        <el-descriptions-item label="年龄">{{
          detailInfo.age
        }}</el-descriptions-item>
        <el-descriptions-item label="睡觉时间段">{{
          detailInfo.sleepTime
        }}</el-descriptions-item>
        <el-descriptions-item label="问题四">{{
          detailInfo.info1
        }}</el-descriptions-item>
        <el-descriptions-item label="问题五">{{
          detailInfo.info2
        }}</el-descriptions-item>
        <el-descriptions-item label="问题六">{{
          detailInfo.info3
        }}</el-descriptions-item>
      </el-descriptions>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'message',
  data() {
    return {
      messageIsShow: false,
      detailVisible: false,
      messageData1: [
        {
          message: '张三',
          date: '2023-08-01',
          type: '1'
        },
        {
          message: '蔡徐坤',
          date: '2023-08-01',
          type: '2'
        },
        {
          message: '蔡徐坤',
          date: '2023-08-01',
          type: '3'
        },
        {
          message: '蔡徐坤',
          date: '2023-08-01',
          type: '1'
        },
        {
          message: '蔡徐坤',
          date: '2023-08-01',
          type: '3'
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
.bg {
  margin: 20px 20px;
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
      height: 550px;
      background-color: white;
      position: relative;
    }
  }
}
</style>
