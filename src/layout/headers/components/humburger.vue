<template>
  <div class="hamburger-container" @click="toggleClick" id="hamburger">
    <el-icon><Grid/></el-icon>
    <svg-icon :icon="icon"></svg-icon>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { Grid } from '@element-plus/icons-vue'
const store = useStore()
const toggleClick = () => {
  store.commit('app/changeSiderType')
}
const icon = computed(() => {
  return store.getters.siderType ? 'hamburger-opened' : 'hamburger-closed'
})
</script>

<style lang="scss" scoped>
.hamburger-container {
  margin-right: 16px;
  margin-left: 90px;
  box-sizing: border-box;
  background-color: #ffffff;
  cursor: pointer;
}
</style>
