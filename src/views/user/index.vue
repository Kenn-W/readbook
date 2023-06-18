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
      <el-table-column fixed="right" label="操作" width="200">
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
            @click="confirmDelete(scope.row.user_id)"
          />
        </template>
      </el-table-column>
    </el-table>
  </el-card>
  <el-dialog
    title="确认删除用户"
    :model-value="showDeleteDialog"
    @update:model-value="showDeleteDialog = $event"
    :close-on-click-modal="false"
    :show-close="false"
  >
    <span>确定要删除该用户吗？</span>
    <template v-slot:footer>
      <el-button @click="cancelDelete">取消</el-button>
      <el-button type="danger" @click="deleteUser(userIdToDelete)">
        确定
      </el-button>
    </template>
  </el-dialog>
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
  <el-card style="margin-top: 20px">
    <h4>阅读书单</h4>
    <el-divider />
    <el-table :data="readData" stripe style="width: 100%">
      <el-table-column prop="book_id" label="书籍ID" width="150" />
      <el-table-column prop="title" label="书籍标题" width="150" />
      <el-table-column prop="authors" label="作者" width="150" />
      <el-table-column prop="isbn" label="ISBN" width="150" />
    </el-table>
  </el-card>
  <el-dialog v-model="dialogVisible" title="添加用户" width="50%">
    <div>
      <el-form
        label-position="top"
        ref="ruleFormRef"
        :model="dialogForm"
        :rules="rules"
        class="demo-ruleForm"
        :size="formSize"
      >
        <el-form-item label="用户ID" prop="userId"
          ><el-input v-model="dialogForm.userId" type="number"
        /></el-form-item>
        <el-form-item label="用户名"
          ><el-input v-model="dialogForm.userName"
        /></el-form-item>
        <el-form-item label="年龄" prop="age"
          ><el-input v-model="dialogForm.age" type="number"
        /></el-form-item>
        <el-form-item label="性别"
          ><el-input v-model="dialogForm.gender"
        /></el-form-item>
      </el-form>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="closeDialog">Cancel</el-button>
        <el-button type="primary" @click="addUser">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { View, Delete, Plus, Search } from '@element-plus/icons-vue'
import axios from 'axios'
</script>

<script>
export default {
  data() {
    return {
      showDeleteDialog: false,
      showConfirmDialog: false, // 确认框的可见性状态
      userIdToDelete: null, // 要删除的用户ID
      value: { value: '' },
      value2: { value: '' },
      queryForm: {
        query: '',
        pagenum: 1,
        pagesize: 2
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
          value: 'age',
          label: '年龄'
        },
        {
          value: 'gender',
          label: '性别'
        },
        {
          value: 'user_regist_time',
          label: '注册时间范围（格式：2000-01-01, 2010-01-01）'
        }
      ],
      tableData: [], // 用户信息表格数据
      detailData: [], // 详细信息表格数据
      rateData: [], // 评分记录表格数据
      readData: [],
      dialogForm: {
        userId: '',
        userName: '',
        age: '',
        gender: ''
      },
      rules: {
        userId: [{ required: true, message: '请输入ID', trigger: 'blur' }],
        age: [
          {
            min: 0,
            max: 100,
            message: '年龄必须在0到100之间',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    confirmDelete(userId) {
      this.showDeleteDialog = true // 打开弹窗
      this.userIdToDelete = userId // 保存要删除的用户ID
    },
    cancelDelete() {
      this.showDeleteDialog = false // 关闭弹窗
    },
    search() {
      let apiUrl = ''
      let requestData = {}

      if (this.value.value === 'user_id') {
        apiUrl = '/api/usermanage/user_id'
        requestData = {
          user_id: this.queryForm.query
        }
      } else if (this.value.value === 'user_name') {
        apiUrl = '/api/usermanage/user_name'
        requestData = {
          user_name: this.queryForm.query
        }
      } else if (this.value.value === 'age') {
        apiUrl = '/api/usermanage/user_age'
        console.log(this.queryForm.query)
        requestData = {
          age: this.queryForm.query
        }
      } else if (this.value.value === 'gender') {
        apiUrl = '/api/usermanage/user_gender'
        console.log(this.queryForm.query)
        requestData = {
          gender: this.queryForm.query
        }
      } else if (this.value.value === 'regst_time') {
        apiUrl = '/api/usermanage/user_regist_time'
        const [startTime, endTime] = this.queryForm.query.split(',')
        console.log(startTime.trim())
        console.log(endTime.trim())
        requestData = {
          user_regist_time1: startTime.trim(),
          user_regist_time2: endTime.trim()
        }
      }
      this.rateData = []
      this.readData = []
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
        .post('/api/usermanage/user_rate_record', requestData)
        .then((response) => {
          const data = response.data
          if (data.code === 0) {
            this.rateData = Object.values(data.result)
          } else {
            alert('该用户没有评价记录')
            this.rateData = []
            console.error('请求失败:', data.message)
          }
        })
        .catch((error) => {
          console.error('请求错误:', error)
        })

      axios
        .post('/api/usermanage/user_toread_book', requestData)
        .then((response) => {
          const data = response.data
          if (data.code === 0) {
            this.readData = Object.values(data.result)
          } else {
            alert('该用户没有阅读书单记录')
            this.readData = []
            console.error('请求失败:', data.message)
          }
        })
        .catch((error) => {
          console.error('请求错误:', error)
        })
    },
    deleteUser(userId) {
      axios
        .post('/api/usermanage/delete_user', { user_id: userId })
        .then((response) => {
          const data = response.data
          console.log(data)
          alert('删除成功')
          this.showDeleteDialog = false // 关闭弹窗
        })
        .catch((error) => {
          console.error('请求错误:', error)
        })
    },

    addUser() {
      const requestData = {
        user_id: this.dialogForm.userId,
        age: parseInt(this.dialogForm.age),
        user_name: this.dialogForm.userName,
        regst_time: new Date().toISOString().split('T')[0],
        gender: this.dialogForm.gender
      }
      axios
        .post('/api/usermanage/add_user', requestData, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((response) => {
          const data = response.data
          if (data.code === 0) {
            alert('添加成功')
            this.search()
            this.closeDialog()
          } else {
            alert(data.message)
          }
        })
        .catch((error) => {
          console.error('请求错误:', error)
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>
