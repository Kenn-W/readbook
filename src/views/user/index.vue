<template>
  <el-card>
    <h4>用户信息</h4>
    <el-divider />
    <el-row :gutter="20">
      <el-select
        v-model="value.value"
        class="m-2"
        placeholder="Select"
        span="1"
      >
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
      <el-button type="success" :icon="Plus" text @click="openDialog" />
    </el-row>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="user_id" label="用户ID" width="150" />
      <el-table-column prop="user_name" label="用户昵称" width="150" />
      <el-table-column prop="age" label="年龄" width="150" />
      <el-table-column prop="gender" label="性别" width="150" />
      <el-table-column prop="regst_time" label="创建时间" width="150" />
      <el-table-column label="操作" width="200">
        <template #default="scope">
          <el-button
            type="primary"
            :icon="View"
            circle
            @click="getUserRate(scope.row.user_id)"
          />
          <el-button
            type="danger"
            :icon="Delete"
            circle
            @click="deleteUser(scope.row.user_id)"
          />
        </template>
      </el-table-column>
    </el-table>
  </el-card>
  <el-card style="margin-top: 20px">
    <h4>评分记录</h4>
    <el-divider />
    <el-table :data="rateData" stripe style="width: 100%">
      <el-table-column prop="book_id" label="书籍ID" width="150" />
      <el-table-column prop="title" label="书籍标题" width="150" />
      <el-table-column prop="isbn" label="ISBN" width="150" />
      <el-table-column prop="rating" label="打分" width="150" />
    </el-table>
  </el-card>
  <el-dialog v-model="dialogVisible" title="添加用户" width="50%">
    <span>请写入新数据</span>
    <div>
      <el-select
        v-model="value2.value"
        class="m-2"
        placeholder="Select"
        span="1"
      >
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
  <!-- 删除确认框 -->
  <el-dialog
    title="确认删除"
    v-model:visible="showConfirmDialog"
    width="30%"
    @close="handleConfirmDialogClose"
  >
    <span>确定要删除该用户吗？</span>
    <template v-slot:footer>
      <el-button @click="handleConfirmDialogClose">取消</el-button>
      <el-button type="primary" @click="confirmDeleteUser">确认</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { View, Delete, Plus, Search } from '@element-plus/icons-vue'
</script>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      showConfirmDialog: false, // 确认框的可见性状态
      userIdToDelete: null, // 要删除的用户ID
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
        .then((response) => {
          const data = response.data
          if (data.code === 0) {
            this.tableData = Object.values(data.result)
            this.detailData = Object.values(data.result)
          } else {
            alert(data.message)
            console.error('请求失败:', data.message)
          }
        })
        .catch((error) => {
          console.error('请求错误:', error)
        })
    },
    openDialog() {
      this.dialogVisible = true
    },
    closeDialog() {
      this.dialogVisible = false
    },
    getUserRate(userId) {
      const requestData = {
        user_id: userId
      }

      axios
        .post('/usermanage/user_rate_record', requestData)
        .then((response) => {
          const data = response.data
          if (data.code === 0) {
            this.rateData = Object.values(data.result)
          } else {
            alert(data.message)
            console.error('请求失败:', data.message)
          }
        })
        .catch((error) => {
          console.error('请求错误:', error)
        })
    },
    deleteUser(userId) {
      this.userIdToDelete = userId // 保存要删除的用户ID
      this.showConfirmDialog = true // 打开确认框
      axios
        .post('/usermanage/delete_user', { user_id: userId })
        .then((response) => {
          // const data = response.data
          alert('删除成功')
        })
        .catch((error) => {
          console.error('请求错误:', error)
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>
