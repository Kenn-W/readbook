<template>
  <el-card>
    <h4>书籍信息</h4>
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
      <el-table-column prop="book_id" label="ID" width="75" />
      <el-table-column prop="title" label="标题" width="150" />
      <el-table-column prop="authors" label="作者" width="150" />
      <el-table-column prop="pub_year" label="出版年份" width="100" />
      <el-table-column prop="isbn" label="ISBN" width="150" />
      <el-table-column prop="avg_rating" label="均分" width="75" />
      <el-table-column prop="rating_num" label="评分人数" width="100" />
      <el-table-column label="封面" width="120">
        <template #default="{ row }">
          <img :src="row.imageUrl" alt="照片" height="100" />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template #default="scope">
          <el-button
            type="primary"
            :icon="View"
            circle
            @click="getUserRate(scope.row.book_id)"
          />
          <el-button
            type="danger"
            :icon="Delete"
            circle
            @click="confirmDelete(scope.row.book_id)"
          />
        </template>
      </el-table-column>
    </el-table>
  </el-card>
  <el-dialog
    title="确认删除书籍"
    :model-value="showDeleteDialog"
    @update:model-value="showDeleteDialog = $event"
    :close-on-click-modal="false"
    :show-close="false"
  >
    <span>确定要删除该书籍吗？</span>
    <template v-slot:footer>
      <el-button @click="cancelDelete">取消</el-button>
      <el-button type="danger" @click="deleteUser(userIdToDelete)">
        确定
      </el-button>
    </template>
  </el-dialog>
  <el-card style="margin-top: 20px">
    <h4>Tag记录</h4>
    <el-divider />
    <el-table :data="rateData" stripe style="width: 100%">
      <el-table-column prop="tag_name" label="Tag名" width="150" />
      <el-table-column prop="count" label="标记次数" width="150" />
    </el-table>
  </el-card>
  <el-dialog v-model="dialogVisible" title="添加书籍" width="50%">
    <div>
      <el-form
        label-position="top"
        ref="ruleFormRef"
        :model="dialogForm"
        :rules="rules"
        class="demo-ruleForm"
        :size="formSize"
      >
        <el-form-item label="书籍ID" prop="bookId"
          ><el-input v-model="dialogForm.bookId" type="number"
        /></el-form-item>
        <el-form-item label="标题" prop="title"
          ><el-input v-model="dialogForm.title"
        /></el-form-item>
        <el-form-item label="作者"
          ><el-input v-model="dialogForm.authors"
        /></el-form-item>
        <el-form-item label="isbn"
          ><el-input v-model="dialogForm.isbn"
        /></el-form-item>
        <el-form-item label="isbn13"
          ><el-input v-model="dialogForm.isbn13"
        /></el-form-item>
        <el-form-item label="出版年份" prop="pub_year"
          ><el-input v-model="dialogForm.pub_year"
        /></el-form-item>
        <el-form-item label="语言"
          ><el-input v-model="dialogForm.language"
        /></el-form-item>
        <el-form-item label="封面地址"
          ><el-input v-model="dialogForm.url"
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
      rules: {
        bookId: [
          { required: true, message: '请输入ID', trigger: 'blur' }
        ],
        title: [{ required: true, message: '请输入标题', trigger: 'change' }],
        pub_year: [
          {
            pattern: /^(19|20)\d{2}$/, // 正则表达式匹配合法的年份，以19或20开头的4位数字
            message: '请输入1900年以后的年份',
            trigger: 'change'
          }
        ]
      },
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
          value: 'book_id',
          label: '书籍ID'
        },
        {
          value: 'isbn',
          label: 'ISBN'
        },
        {
          value: 'isbn13',
          label: 'ISBN13'
        },
        {
          value: 'author',
          label: '作者'
        },
        {
          value: 'pub_year',
          label: '出版年份'
        },
        {
          value: 'title',
          label: '标题'
        }
      ],
      tableData: [], // 用户信息表格数据
      detailData: [], // 详细信息表格数据
      rateData: [], // 评分记录表格数据
      dialogForm: {
        userId: '',
        userName: '',
        age: '',
        gender: ''
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

      if (this.value.value === 'book_id') {
        apiUrl = '/api/bookmanage/book_id'
        requestData = {
          book_id: this.queryForm.query
        }
      } else if (this.value.value === 'isbn') {
        apiUrl = '/api/bookmanage/book_ISBN'
        requestData = {
          isbn: this.queryForm.query
        }
      } else if (this.value.value === 'isbn13') {
        apiUrl = '/api/bookmanage/book_ISBN13'
        requestData = {
          isbn13: this.queryForm.query
        }
      } else if (this.value.value === 'author') {
        apiUrl = '/api/bookmanage/book_author'
        requestData = {
          authors: this.queryForm.query
        }
      } else if (this.value.value === 'pub_year') {
        apiUrl = '/api/bookmanage/book_year'
        requestData = {
          pub_year: this.queryForm.query
        }
      } else if (this.value.value === 'title') {
        apiUrl = '/api/bookmanage/book_title'
        requestData = {
          title: this.queryForm.query
        }
      }

      axios
        .post(apiUrl, requestData)
        .then((response) => {
          const data = response.data
          if (data.code === 0) {
            // 将返回的结果对象转换为数组
            this.tableData = Object.values(data.result)
            this.detailData = Object.values(data.result)

            // 在数组中的每个对象中添加imageUrl属性
            this.tableData.forEach((item) => {
              item.imageUrl = item.url
            })
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
    getUserRate(bookId) {
      const requestData = {
        book_id: bookId
      }

      axios
        .post('/api/bookmanage/tag_and_count', requestData)
        .then((response) => {
          const data = response.data
          if (data.code === 0) {
            this.rateData = Object.values(data.result)
          } else {
            alert('本书没有tag记录')
            // console.error('请求失败:', data.message)
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
        .post('/api/bookmanage/delete_book', { book_id: userId })
        .then((response) => {
          const data = response.data
          console.log(data)
          alert('删除成功')
        })
        .catch((error) => {
          console.error('请求错误:', error)
        })
    },
    addUser() {
      const requestData = {
        book_id: this.dialogForm.bookId,
        isbn: this.dialogForm.isbn,
        isbn13: this.dialogForm.isbn13,
        authors: this.dialogForm.authors,
        pub_year: this.dialogForm.pub_year,
        title: this.dialogForm.title,
        language: this.dialogForm.language,
        url: this.dialogForm.url
      }
      axios
        .post('/api/bookmanage/add_book', requestData, {
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
