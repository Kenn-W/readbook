<template>
  <el-space wrap>
    <el-card
      shadow="hover"
      class="box-card"
      id="user"
      style="
        margin: 10px;
        width: 400px;
        height: 175px;
        background-color: #ea7070;
        color: white;
      "
    >
      <template #header>
        <div class="card-header" style="text-align: center">
          <el-icon style="font-size: 2em"><User /></el-icon>
          <span style="font-size: 2em; margin-right: 5px">用户总数</span>
        </div>
      </template>
      <h1 style="font-size: 2em; text-align: center">{{ userCount }}</h1>
    </el-card>
  </el-space>
  <el-space wrap>
    <el-card
      shadow="hover"
      class="box-card"
      id="user"
      style="
        margin: 10px;
        width: 400px;
        height: 175px;
        background-color: #82c95f;
        color: white;
      "
    >
      <template #header>
        <div class="card-header" style="text-align: center">
          <el-icon style="font-size: 2em"><Collection /></el-icon>
          <span style="font-size: 2em; margin-right: 5px">图书登记数</span>
        </div>
      </template>
      <h1 style="font-size: 2em; text-align: center">{{ bookCount }}</h1>
    </el-card>
  </el-space>
  <el-space wrap>
    <el-card
      shadow="hover"
      class="box-card"
      id="user"
      style="
        margin: 10px;
        width: 400px;
        height: 175px;
        background-color: #be68e8;
        color: white;
      "
    >
      <template #header>
        <div class="card-header" style="text-align: center">
          <el-icon style="font-size: 2em"><ChatSquare /></el-icon>
          <span style="font-size: 2em; margin-right: 5px">评分条数</span>
        </div>
      </template>
      <h1 style="font-size: 2em; text-align: center">{{ commentCount }}</h1>
    </el-card>
  </el-space>
  <el-space wrap>
    <el-card
      shadow="hover"
      class="box-card"
      id="user"
      style="
        margin: 10px;
        width: 400px;
        height: 175px;
        background-color: #648adb;
        color: white;
      "
    >
      <template #header>
        <div class="card-header" style="text-align: center">
          <el-icon style="font-size: 2em"><CollectionTag /></el-icon>
          <span style="font-size: 2em; margin-right: 5px">图书tag数</span>
        </div>
      </template>
      <h1 style="font-size: 2em; text-align: center">{{ tagCount }}</h1>
    </el-card>
  </el-space>
</template>

<script setup>
import {
  User,
  Collection,
  ChatSquare,
  CollectionTag
} from '@element-plus/icons-vue'
</script>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      userCount: null,
      bookCount: null,
      commentCount: null,
      tagCount: null
    }
  },
  methods: {
    fetchData() {
      axios
        .get('/api/homepage/entry')
        .then((response) => {
          const { code, result } = response.data
          if (code === 0) {
            this.userCount = result.user_cnt
            this.bookCount = result.book_cnt
            this.commentCount = result.comment_cnt
            this.tagCount = result.tag_cnt
          } else {
            console.error('请求数据失败:', response.data.message)
            this.userCount = 0
            this.bookCount = 0
            this.commentCount = 0
            this.tagCount = 0
          }
        })
        .catch((error) => {
          console.error('请求数据时出错：', error)
        })
    }
  },
  created() {
    this.fetchData()
  }
}
</script>

<style lang="scss" scoped></style>
