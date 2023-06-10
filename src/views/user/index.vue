<template>
  <el-card>
    <h4>用户信息</h4>
    <el-divider />
    <el-row :gutter="20">
      <el-select v-model="value" class="m-2" placeholder="Select" span="1">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-col :span="10">
        <el-input clearable v-model="queryForm.query"></el-input>
      </el-col>
      <el-button type="primary" :icon="Search">查找</el-button>
    </el-row>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="user_id" label="用户ID" width="150" />
      <el-table-column prop="user_name" label="用户昵称" width="150" />
      <el-table-column prop="user_age" label="年龄" width="150" />
      <el-table-column prop="user_gender" label="性别" width="150" />
      <el-table-column prop="user_regist_time" label="创建时间" width="150" />
      <el-table-column label="操作" width="200">
        <template #default>
          <el-button type="primary" :icon="Edit" circle />
          <el-button type="primary" :icon="View" circle />
          <el-button type="danger" :icon="Delete" circle />
        </template>
      </el-table-column>
    </el-table>
  </el-card>
  <el-card style="margin-top: 20px"
    ><h4>详细信息</h4>
    <el-divider />
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="user_id" label="用户ID" width="150" />
      <el-table-column prop="user_name" label="用户昵称" width="150" />
      <el-table-column prop="user_age" label="年龄" width="150" />
      <el-table-column prop="user_gender" label="性别" width="150" />
      <el-table-column prop="user_regist_time" label="创建时间" width="150" />
    </el-table>
    <h4 style="margin-top: 20px; margin-bottom: 20px">评分记录</h4>
    <el-table :data="rateData" stripe style="width: 100%">
      <el-table-column prop="book_id" label="书籍ID" width="150" />
      <el-table-column prop="book_title" label="书籍标题" width="150" />
      <el-table-column prop="book_ISBN" label="ISBN" width="150" />
      <el-table-column
        prop="book_score"
        label="打分"
        width="150"
      /> </el-table
  ></el-card>
</template>

<script setup>
import { ref } from 'vue'
import { View, Delete, Edit, Search } from '@element-plus/icons-vue'
const queryForm = ref({
  query: '',
  pagenum: 1,
  pagesize: 2
})
const value = ref('')
// const handleClick = () => {
//   console.log('click')
// }
const options = [
  {
    value: 'user_id',
    label: '用户ID'
  },
  {
    value: 'user_name',
    label: '用户名'
  },
  {
    value: 'user_age',
    label: '年龄'
  },
  {
    value: 'user_gender',
    label: '性别'
  },
  {
    value: 'user_regist_time',
    label: '注册时间范围（格式：2000-01-01, 2010-01-01）'
  }
]
const tableData = [
  {
    user_id: '12345',
    user_name: 'Tom',
    user_age: '12345',
    user_gender: '1999',
    user_regist_time: 'eng'
  }
]
const rateData = [
  {
    book_id: '123',
    book_title: 'Harry',
    book_ISBN: '123123',
    book_score: '4'
  }
]
</script>

<style lang="scss" scoped></style>
