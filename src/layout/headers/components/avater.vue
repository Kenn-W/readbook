<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar shape="square" :size="40" :src="squareUrl"></el-avatar>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import router from '@/router'
import { ref } from 'vue'
// import { useStore } from 'vuex'
// const store = useStore()

const squareUrl = ref(
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6xpRPqyw8Pg1e9NS4Ubt1cIZj3Zm4TsKejOghu39eiXqXBdddaqmVHoLvFuea6HqP5UM&usqp=CAU'
)

const logout = () => {
  router.replace('/login')
}
</script>

<style lang="scss" scoped>
::v-deep .el-dropdown-menu__item {
  white-space: nowrap;
}
</style>
