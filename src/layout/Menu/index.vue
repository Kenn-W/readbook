<template>
  <h3 class="mb-2" style="background-color: whitesmoke; color: black; padding: 10px;">读步天下管理系统</h3>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    router
  >
    <el-menu-item index="2">
      <el-icon><House /></el-icon>
      <span>后台主页</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><User /></el-icon>
      <span>用户管理</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <span>书籍信息管理</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup></script>
import { House, User, Message } from '@element-plus/icons-vue'
<style lang="scss" scoped></style>
