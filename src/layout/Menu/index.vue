<template>
  <h3 class="mb-2" style="background-color: #F0F8FF; color: #0E3955; padding: 18px; ">读步天下管理系统</h3>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    router
    unique-opened
    :collapse = "$store.getters.siderType"
  >
    <el-menu-item index="/">
      <el-icon><House /></el-icon>
      <span>后台主页</span>
    </el-menu-item>
    <el-menu-item index="user">
      <el-icon><User /></el-icon>
      <span>用户管理</span>
    </el-menu-item>
    <el-menu-item index="book">
      <el-icon><Setting /></el-icon>
      <span>书籍信息管理</span>
    </el-menu-item>
  </el-menu>
</template>
<script setup>
import { House, User, Setting } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped></style>
