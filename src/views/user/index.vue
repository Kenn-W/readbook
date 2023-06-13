<template>
  <el-card>
    <h4>用户信息</h4>
    <el-divider />
    <el-row :gutter="20">
      <el-select v-model="value.value" class="m-2" placeholder="Select" span="1">
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
      <el-button type="primary" :icon="Search" @click="search">查找</el-button>
    </el-row>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="user_id" label="用户ID" width="150" />
      <el-table-column prop="user_name" label="用户昵称" width="150" />
      <el-table-column prop="age" label="年龄" width="150" />
      <el-table-column prop="gender" label="性别" width="150" />
      <el-table-column prop="regst_time" label="创建时间" width="150" />
      <el-table-column label="操作" width="200">
        <template #default>
          <el-button
            type="primary"
            :icon="Edit"
            circle
            text
            @click="openDialog"
          />
          <el-button type="primary" :icon="View" circle />
          <el-button type="danger" :icon="Delete" circle />
        </template>
      </el-table-column>
    </el-table>
  </el-card>
  <el-card style="margin-top: 20px">
    <h4>详细信息</h4>
    <el-divider />
    <el-table :data="tableData2" stripe style="width: 100%">
      <el-table-column prop="user_id" label="用户ID" width="150" />
      <el-table-column prop="user_name" label="用户昵称" width="150" />
      <el-table-column prop="user_age" label="年龄" width="150" />
      <el-table-column prop="user_gender" label="性别" width="150" />
      <el-table-column prop="user_regist_time" label="创建时间" width="150" />
    </el-table>
    <h4 style="margin-top: 20px; margin-bottom: 20px">评分记录</h4>
    <el-table :data="rateData" stripe style="width: 100%">
      <el-table-column prop="book_id" label="书籍ID" width="150" />
      <el-table-column prop="book_title" label="书籍标题" width="150" />
      <el-table-column prop="book_ISBN" label="ISBN" width="150" />
      <el-table-column prop="book_score" label="打分" width="150" />
    </el-table>
  </el-card>
  <el-dialog v-model="dialogVisible" title="用户数据修改" width="30%">
    <span>请选择要修改的数据项并写入新数据</span>
    <div>
      <el-select v-model="value2.value" class="m-2" placeholder="Select" span="1">
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <div>
      <el-col :span="15">
        <el-input clearable v-model="dialogForm.query"></el-input>
      </el-col>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closeDialog">Cancel</el-button>
        <el-button type="primary" @click="closeDialog">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { View, Delete, Edit, Search } from '@element-plus/icons-vue'
</script>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      value: { value: '' },
      value2: { value: '' },
      queryForm: {
        query: '',
        pagenum: 1,
        pagesize: 2
      },
      dialogForm: {
        query: ''
      },
      dialogVisible: false,
      options: [
        {
          value: 'user_id',
          label: '用户ID'
        },
        {
          value: 'user_name',
          label: '用户名'
        },
        {
          value: 'age',
          label: '年龄'
        },
        {
          value: 'gender',
          label: '性别'
        },
        {
          value: 'regst_time',
          label: '注册时间范围（格式：2000-01-01, 2010-01-01）'
        }
      ],
      options2: [
        {
          value: 'user_name',
          label: '用户名'
        },
        {
          value: 'user_age',
          label: '年龄'
        },
        {
          value: 'user_gender',
          label: '性别'
        },
        {
          value: 'user_regist_time',
          label: '注册时间范围（格式：2000-01-01, 2010-01-01）'
        }
      ],
      tableData: [], // 用户信息表格数据
      detailData: [], // 详细信息表格数据
      rateData: [] // 评分记录表格数据
    }
  },
  methods: {
    search() {
      const requestData = {
        [this.value.value]: this.queryForm.query
      }

      let apiUrl = ''
      if (this.value.value === 'user_id') {
        apiUrl = '/usermanage/user_id'
      } else if (this.value.value === 'user_name') {
        apiUrl = '/usermanage/user_name'
      } else if (this.value.value === 'age') {
        apiUrl = '/usermanage/age'
      } else if (this.value.value === 'gender') {
        apiUrl = '/usermanage/gender'
      } else if (this.value.value === 'regst_time') {
        apiUrl = '/usermanage/regst_time'
      }

      axios
        .post(apiUrl, requestData)
        .then(response => {
          const data = response.data
          if (data.code === 0) {
            this.tableData = Object.values(data.result)
            this.detailData = Object.values(data.result)
          } else {
            alert(data.message)
            console.error('请求失败:', data.message)
          }
        })
        .catch(error => {
          console.error('请求错误:', error)
        })
    },
    openDialog() {
      this.dialogVisible = true
    },
    closeDialog() {
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss" scoped></style>
