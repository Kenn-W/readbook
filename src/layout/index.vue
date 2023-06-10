<template>
  <el-container class="app-wrapper">
    <el-aside width="220px" class="sidebar-container">
      <Menu/>
    </el-aside>
  </el-container>
  <el-container class="container">
    <el-header><Headers /></el-header>
    <el-main><router-view /></el-main>
  </el-container>
</template>

<script setup>
import Menu from './Menu'
import Headers from './headers'
// import { ref } from 'vue'
// import variables from '@/styles/variables.scss'
// const asideWidth = ref(variables.sideBarWidth)
</script>
<style lang="scss" scoped>
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
  box-shadow: 4px rgba(0, 21, 41, 0.08);
}
.container {
  width: calc(100% - $sideBarWidth);
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: all 0.28s;
  box-shadow: 4px rgba(0, 21, 41, 0.08);
}
::v-deep .el-header {
  padding: 0;
}
</style>
