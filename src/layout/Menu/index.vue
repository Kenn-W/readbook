<template>
  <h3 class="mb-2" style="background-color: #f0f8ff; color: #0E3955; padding: 18px; ">智能舍友匹配系统</h3>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    router
    unique-opened
  >
    <el-menu-item index="information">
      <el-icon><User /></el-icon>
      <span>个人信息</span>
    </el-menu-item>
    <el-menu-item index="message">
      <el-icon><Message /></el-icon>
      <span>信箱</span>
    </el-menu-item>
    <el-menu-item index="teamLobby">
      <el-icon><House /></el-icon>
      <span>组队大厅</span>
    </el-menu-item>
    <el-menu-item index="teacher">
      <el-icon><Compass /></el-icon>
      <span>宿舍分配</span>
    </el-menu-item>
    <el-menu-item index="result">
      <el-icon><CircleCheck /></el-icon>
      <span>结果页</span>
    </el-menu-item>
  </el-menu>
</template>
<script setup>
import { User, Message, House, Compass, CircleCheck } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped></style>
