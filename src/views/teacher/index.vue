<template>
  <div class="bg">
    <el-button
      type="primary"
      round
      style="height: 40px; width: 120px; font-size: 13px; text-align: center"
      @click="matchRoommate"
      >舍友匹配</el-button
    >
    <div class="searchBox">
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="inputSearch"
      ></el-input>
    </div>
    <el-table :data="importData" style="width: 100%; margin-top: 20px">
      <el-table-column label="学号" width="150" min-width="150">
        <template v-slot="scope">
          <div class="show-box">{{ importData[scope.$index].id }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="150" min-width="150">
        <template v-slot="scope">
          <div class="show-box">{{ importData[scope.$index].name }}</div>
        </template>
      </el-table-column>
      <el-table-column label="性别" width="150" min-width="150">
        <template v-slot="scope">
          <el-tag
            type="primary"
            size="small"
            v-if="importData[scope.$index].gender === '男'"
            >&nbsp;&nbsp;男&nbsp;&nbsp;</el-tag
          >
          <el-tag
            type="success"
            size="small"
            v-if="importData[scope.$index].gender === '女'"
            >&nbsp;&nbsp;女&nbsp;&nbsp;</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column prop="info1" label="信息1" min-width="200">
        <template v-slot="scope">
          <div class="show-box">{{ importData[scope.$index].info1 }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="info2" label="信息2" min-width="200">
        <template v-slot="scope">
          <div class="show-box">{{ importData[scope.$index].info2 }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="info3" label="信息3" min-width="200">
        <template v-slot="scope">
          <div class="show-box">{{ importData[scope.$index].info3 }}</div>
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
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      importData: [
        {
          id: '10215101474',
          name: '周杰伦',
          gender: '女',
          info1: '上海市普陀区金沙江路 1517 弄',
          info2: '上海市普陀区金沙江路 1517 弄',
          info3: '上海市普陀区金沙江路 1517 弄 '
        },
        {
          id: '10215101474',
          name: '周杰伦',
          gender: '男',
          info1: '上海市普陀区金沙江路 1517 弄',
          info2: '上海市普陀区金沙江路 1517 弄',
          info3: '上海市普陀区金沙江路 1517 弄 '
        },
        {
          id: '10215101474',
          name: '周杰伦',
          gender: '男',
          info1: '上海市普陀区金沙江路 1517 弄',
          info2: '上海市普陀区金沙江路 1517 弄',
          info3: '上海市普陀区金沙江路 1517 弄 '
        },
        {
          id: '10215101474',
          name: '周杰伦',
          gender: '女',
          info1: '上海市普陀区金沙江路 1517 弄',
          info2: '上海市普陀区金沙江路 1517 弄',
          info3: '上海市普陀区金沙江路 1517 弄 '
        }
      ],
      inputSearch: ''
    }
  },
  methods: {
    matchRoommate() {
      this.$message({
        message: '匹配成功！',
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
// .bg {
//   background-color: rgb(238, 241, 246);
//   padding: 20px 20px;
//   width: 100%;
//   height: 100%;
// }
:deep .el-table th.el-table__cell {
  overflow: auto !important;
  background-color: #cfd7e6 !important;
  /*#E6EFFB E6EBF5*/
}
:deep .el-table thead {
  color: BLACK !important;
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
}
.searchBox {
  float: right;
  /* height: 20px; */
  width: 240px;
  /* padding-top: 5px; */
  padding-right: 20px;
}
</style>
