<template>
  <el-card>
    <h4>书籍信息</h4>
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
      <el-table-column prop="book_id" label="书籍ID" width="150" />
      <el-table-column prop="book_title" label="标题" width="150" />
      <el-table-column prop="book_ISBN" label="ISBN" width="150" />
      <el-table-column prop="book_year" label="出版年份" width="150" />
      <el-table-column prop="book_language" label="语言" width="150" />
      <el-table-column prop="book_avg_score" label="评分" width="150" />
      <el-table-column prop="book_com_num" label="评分人数" width="150" />
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
      <el-table-column prop="book_id" label="书籍ID" width="150" />
      <el-table-column prop="book_title" label="标题" width="150" />
      <el-table-column prop="book_ISBN" label="ISBN" width="150" />
      <el-table-column prop="book_year" label="出版年份" width="150" />
      <el-table-column prop="book_language" label="语言" width="150" />
      <el-table-column prop="book_avg_score" label="评分" width="150" />
      <el-table-column prop="book_com_num" label="评分人数" width="150" />
      <el-table-column label="封面">
        <template v-slot="scope">
          <img :src="scope.row.photoUrl" alt="照片" height="50" />
        </template>
      </el-table-column>
    </el-table>
    <h4 style="margin-top: 20px; margin-bottom: 20px">Tags</h4>
    <el-table :data="tagData" stripe style="width: 100%">
      <el-table-column prop="tag_name" label="Tag名" width="150" />
      <el-table-column
        prop="book_tag_num"
        label="标记次数"
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
    value: 'book_id',
    label: '书籍ID'
  },
  {
    value: 'book_title',
    label: '标题'
  },
  {
    value: 'book_author',
    label: '作者'
  },
  {
    value: 'book_ISBN',
    label: 'ISBN'
  },
  {
    value: 'book_ISBN13',
    label: 'ISBN13'
  },
  {
    value: 'book_year',
    label: '年份'
  },
  {
    value: 'book_language',
    label: '语言'
  },
  {
    value: 'book_tag_name',
    label: 'Tag名'
  }
]
const tableData = [
  {
    book_id: '12345',
    book_title: 'Tom',
    book_ISBN: '12345',
    book_year: '1999',
    book_language: 'eng',
    book_avg_score: '3.5',
    book_com_num: '1500',
    photoUrl: 'https://static-cse.canva.cn/blob/325064/1003w-aXJ9EyIbEaA.jpg'
  }
]
const tagData = [
  {
    tag_name: 'Long',
    book_tag_num: '111'
  }
]
</script>

<style lang="scss" scoped></style>
