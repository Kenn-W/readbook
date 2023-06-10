<template>
  <el-space wrap>
    <el-card
      class="box-card"
      id="user"
      style="
        margin: 10px;
        width: 300px;
        background-color: #ea7070;
        color: white;
      "
    >
      <template #header>
        <div class="card-header" style="text-align: center">
          <el-icon style="font-size: 2em;"><User /></el-icon>
          <span style="font-size: 2em; margin-right: 5px">用户总数</span>
        </div>
      </template>
      <h1 style="font-size: 2em; text-align: center">112345</h1>
    </el-card>
  </el-space>
  <el-space wrap>
    <el-card
      class="box-card"
      id="user"
      style="
        margin: 10px;
        width: 300px;
        background-color: #82c95f;
        color: white;
      "
    >
      <template #header>
        <div class="card-header" style="text-align: center">
          <el-icon style="font-size: 2em;"><Collection /></el-icon>
          <span style="font-size: 2em; margin-right: 5px">图书登记数</span>
        </div>
      </template>
      <h1 style="font-size: 2em; text-align: center">112345</h1>
    </el-card>
  </el-space>
  <el-space wrap>
    <el-card
      class="box-card"
      id="user"
      style="
        margin: 10px;
        width: 300px;
        background-color: #be68e8;
        color: white;
      "
    >
      <template #header>
        <div class="card-header" style="text-align: center">
          <el-icon style="font-size: 2em;"><ChatSquare /></el-icon>
          <span style="font-size: 2em; margin-right: 5px">评价条数</span>
        </div>
      </template>
      <h1 style="font-size: 2em; text-align: center">112345</h1>
    </el-card>
  </el-space>
  <el-space wrap>
    <el-card
      class="box-card"
      id="user"
      style="
        margin: 10px;
        width: 300px;
        background-color: #648adb;
        color: white;
      "
    >
      <template #header>
        <div class="card-header" style="text-align: center">
          <el-icon style="font-size: 2em;"><CollectionTag /></el-icon>
          <span style="font-size: 2em; margin-right: 5px">图书tag数</span>
        </div>
      </template>
      <h1 style="font-size: 2em; text-align: center">112345</h1>
    </el-card>
  </el-space>
</template>

<script setup>import { User, Collection, ChatSquare, CollectionTag } from '@element-plus/icons-vue'</script>

<style lang="scss" scoped></style>
