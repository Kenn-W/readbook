<template>
  <el-card>
    <el-row :gutter="20">
      <el-select v-model="value" class="m-2" placeholder="Select" :span="5">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-col :span="7">
        <el-input clearable v-model="queryForm.query"></el-input>
      </el-col>
      <el-button type="primary" :icon="Search"></el-button>
    </el-row>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const queryForm = ref({
  query: '',
  pagenum: 1,
  pagesize: 2
})
const value = ref('')
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
    value: 'book_author作者',
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
</script>

<style lang="scss" scoped></style>
