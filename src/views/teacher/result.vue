<template>
  <div class="bg">
    <el-button
      type="primary"
      round
      style="height: 40px; width: 120px; font-size: 13px"
      >结果导出</el-button
    >
    <div class="searchBox">
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="inputSearch"
      ></el-input>
    </div>
    <el-table :data="importData" style="width: 100%; margin-top: 20px">
      <el-table-column label="序号" width="100" min-width="100" align="center"
        >1</el-table-column
      >
      <el-table-column prop="name" label="姓名" min-width="180" align="center">
        <template v-slot="scope">
          <div class="show-box" @click="showDetail(scope.$index, scope.row)">
            {{ importData[scope.$index].name }}
          </div>
        </template>
      </el-table-column>
      <el-table-column label="序号" width="100" min-width="100" align="center"
        >2</el-table-column
      >
      <el-table-column prop="name" label="姓名" min-width="180" align="center">
        <template v-slot="scope">
          <div class="show-box" @click="showDetail(scope.$index, scope.row)">
            {{ importData[scope.$index].name }}
          </div>
        </template>
      </el-table-column>
      <el-table-column label="序号" width="100" min-width="100" align="center"
        >3</el-table-column
      >
      <el-table-column prop="name" label="姓名" min-width="180" align="center">
        <template v-slot="scope">
          <div class="show-box" @click="showDetail(scope.$index, scope.row)">
            {{ importData[scope.$index].name }}
          </div>
        </template>
      </el-table-column>
      <el-table-column label="序号" width="100" min-width="100" align="center"
        >4</el-table-column
      >
      <el-table-column prop="name" label="姓名" min-width="180" align="center">
        <template v-slot="scope">
          <div class="show-box" @click="showDetail(scope.$index, scope.row)">
            {{ importData[scope.$index].name }}
          </div>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      style="margin-top: 30px; text-align: center"
      layout="prev, pager, next"
      :total="100"
    >
    </el-pagination>
    <!--***************************详细信息对话框***********************************************-->
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
    <!--************************详细信息对话框结束******************************************-->
  </div>
</template>

<script>
export default {
  name: 'Result',
  data() {
    return {
      importData: [
        {
          id: '10215101474',
          name: '周杰伦',
          gender: '女',
          info1: '上海市普陀区金沙江路 1517 弄',
          info2: '上海市普陀区金沙江路 1517 弄',
          info3: '上海市普陀区金沙江路 1517 弄 ',
          sleepTime: '9:00',
          age: '19'
        },
        {
          id: '10215101474',
          name: '周杰伦',
          gender: '男',
          info1: '上海市普陀区金沙江路 1517 弄',
          info2: '上海市普陀区金沙江路 1517 弄',
          info3: '上海市普陀区金沙江路 1517 弄 ',
          sleepTime: '9:00',
          age: '19'
        },
        {
          id: '10215101474',
          name: '周杰伦',
          gender: '男',
          info1: '上海市普陀区金沙江路 1517 弄',
          info2: '上海市普陀区金沙江路 1517 弄',
          info3: '上海市普陀区金沙江路 1517 弄 ',
          sleepTime: '9:00',
          age: '29'
        },
        {
          id: '10215101474',
          name: '周杰伦',
          gender: '女',
          info1: '上海市普陀区金沙江路 1517 弄',
          info2: '上海市普陀区金沙江路 1517 弄',
          info3: '上海市普陀区金沙江路 1517 弄 ',
          sleepTime: '9:00',
          age: '19'
        }
      ],
      detailVisible: false,
      detailInfo: {
        id: '',
        name: '',
        gender: '',
        info1: '',
        info2: '',
        info3: '',
        sleepTime: '',
        age: ''
      },
      inputSearch: ''
    }
  },
  methods: {
    showDetail(index, row) {
      this.detailVisible = true
      for (const i in this.detailInfo) {
        this.detailInfo[i] = row[i]
      }
    },
    downloadResult() {
      window.location.href = 'api/student/download'
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.bg {
  margin: 20px 20px;
}
:deep .el-table th.el-table__cell {
  overflow: auto !important;
  background-color: #cfd7e6 !important;
}
:deep .el-table thead {
  color: BLACK !important;
}
:deep .el-descriptions :not(.is-bordered) .el-descriptions-item__cell {
  padding-bottom: 30px !important;
}
.header {
  text-align: left;
  height: 60px;
  line-height: 60px;
}
.header-font {
  font-size: 22px;
  font-weight: bold;
}
/*.el-table tr {*/
/*    background-color: #778899 !important;*/
/*}*/
.show-box {
  max-height: 60px;
  overflow: auto;
  font-size: 12px;
  /*color: #66b1ff !important;*/
}
.show-box:hover {
  color: #66b1ff !important;
}
.dialog-title {
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 30px;
}
.searchBox {
  float: right;
  /* height: 50px; */
  width: 240px;
  /* padding-top: 5px; */
  padding-right: 20px;
}
</style>
