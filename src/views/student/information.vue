<!-- eslint-disable -->
<template>
  <div class="bg">
    <div class="left-col">
      <div class="photo-box">
        <img src="../../assets/images/userphoto1.jpg" alt="" />
      </div>
      <div style="text-align: center">
        <el-button type="primary" size="mini">编辑头像</el-button>
      </div>
    </div>
    <div class="right-col content-center">
      <div class="direction">
        <div class="transverse">
          <div class="info-title">
            <div style="padding-top: 5px; float: left">基本信息</div>
            <el-button type="success" size="small" style="margin-right: 20px; float: right; margin-top: 10px"
              @click="showPersonalInfo">编辑</el-button>
          </div>
          <div class="info-block">
            <div class="block-left">
              <div>姓名：</div>
              <br />
              <div>学号：</div>
              <br />
              <div>专业：</div>
              <br />
              <div>性别：</div>
              <br />
              <div>年龄：</div>
              <br />
            </div>
            <div class="block-right">
              <div>{{ personInfoList.name }}</div>
              <br />
              <div style="padding-top: 3px">{{ personInfoList.number }}</div>
              <br />
              <div>{{ personInfoList.major }}</div>
              <br />
              <div v-if="personInfoList.gender === '1'">男</div>
              <div v-if="personInfoList.gender === '2'">女</div>
              <br />
              <div style="padding-top: 3px">{{ personInfoList.age }}</div>
              <br />
            </div>
            <div style="clear: both"></div>
          </div>
        </div>
        <div class="transverse">
          <div class="info-title">
            <div style="padding-top: 5px; float: left">问卷信息</div>
            <el-button type="success" size="small" style="margin-right: 20px; float: right; margin-top: 10px"
              @click="showQuestionnaireEdit">编辑</el-button>
          </div>
          <div class="info-block">
            <div class="block-left">
              <div>起床时间：</div>
              <br />
              <div>睡觉时间：</div>
              <br />
              <div>兴趣爱好：</div>
              <br />
            </div>
            <div class="block-right">
              <div style="padding-top: 3px">
                {{ questionnaireInfo.sleepTime }}
              </div>
              <br />
              <div style="padding-top: 3px">
                {{ questionnaireInfo.getupTime }}
              </div>
              <br />
              <div>{{ questionnaireInfo.hobby }}</div>
              <br />
              <el-button type="primary" size="small" style="margin-right: 20px; float: right; margin-top: 35px"
                @click="showQuestionnaireInfo">更多</el-button>
            </div>
            <div style="clear: both"></div>
          </div>
        </div>
        <div class="transverse">
          <div class="info-title">
            <div style="padding-top: 5px; float: left">个人Tag</div>
            <el-button type="success" size="small" style="margin-right: 20px; float: right; margin-top: 10px"
              @click="addNewTag">新增&nbsp;+</el-button>
            <el-button type="danger" size="small" style="margin-right: 20px; float: right; margin-top: 10px"
              @click="deleteTagShow">删除&nbsp;-</el-button>
          </div>
          <div class="info-block" style="padding-left: 20px !important">
            <el-tag size="medium" type="success" v-for="item in tagList" :key="item">{{ item }}</el-tag>
          </div>
        </div>
      </div>
      <div class="direction" style="margin-top: 50px">
        <div class="transverse" v-if="groupState">
          <div class="info-title">
            <div style="padding-top: 5px; float: left">组队信息</div>
            <el-button type="success" size="small" style="margin-right: 10px; float: right; margin-top: 10px"
              @click="teamTagShow">Tag编辑</el-button>
            <el-button type="danger" size="small" style="margin-right: 10px; float: right; margin-top: 10px"
              @click="leaveGroup">退出小组</el-button>
          </div>
          <div class="info-block">
            <div class="block-left" style="height: 160px !important">
              <div>成员一：</div>
              <br />
              <div>成员二：</div>
              <br />
              <div>成员三：</div>
              <br />
              <div>成员四：</div>
              <br />
            </div>
            <div class="block-right" style="height: 160px !important">
              <div>蔡徐坤（发起人）</div>
              <br />
              <div>张三</div>
              <br />
              <div>----</div>
              <br />
              <div>----</div>
              <br />
            </div>
            <div style="clear: both"></div>
            <div class="foot-tag">
              <el-tag size="medium" type="success" v-for="item in teamTagList" :key="item">{{ item }}</el-tag>
            </div>
          </div>
        </div>
        <div class="transverse" v-if="!groupState"></div>
        <div class="transverse"></div>
        <div class="transverse"></div>
      </div>
    </div>
    <div style="clear: both"></div>
    <!--个人信息对话框-->
    <el-dialog v-model:visible="personInfoIsShow" width="40%" title="个人信息编辑" :close-on-click-modal="false"
      :show-close="false">
      <el-form :model="personInfoList" label-width="100px">
        <el-form-item label="姓名：" :rules="[{ required: true }]">
          <el-input v-model="personInfoList.name"></el-input>
        </el-form-item>
        <el-form-item label="学号：" :rules="[{ required: true }]">
          <el-input v-model="personInfoList.number"></el-input>
        </el-form-item>
        <el-form-item label="专业：" :rules="[{ required: true }]">
          <el-input v-model="personInfoList.major"></el-input>
        </el-form-item>
        <el-form-item label="年龄：" :rules="[{ required: true }]">
          <el-input v-model="personInfoList.age"></el-input>
        </el-form-item>
        <el-form-item label="性别：" :rules="[{ required: true }]">
          <el-radio v-model="personInfoList.gender" label="1">男</el-radio>
          <el-radio v-model="personInfoList.gender" label="2">女</el-radio>
        </el-form-item>
      </el-form>
      <div class="dialog-footer">
        <el-button size="small" @click="cancelPersonalInfo">取 消</el-button>
        <el-button type="primary" size="small" @click="determinePersonalInfo">确 定</el-button>
      </div>
    </el-dialog>

    <!--问卷详细信息对话框-->
    <el-dialog v-model:visible="questionnaireInfoVisible" title="问卷信息" width="40%">
      <el-descriptions column="1" :model="questionnaireInfo">
        <el-descriptions-item label="睡觉时间">{{
          questionnaireInfo.sleepTime
        }}</el-descriptions-item>
        <el-descriptions-item label="起床时间">{{
          questionnaireInfo.getupTime
        }}</el-descriptions-item>
        <el-descriptions-item label="爱好">{{
          questionnaireInfo.hobby
        }}</el-descriptions-item>
        <el-descriptions-item label="问题四">{{
          questionnaireInfo.info1
        }}</el-descriptions-item>
        <el-descriptions-item label="问题五">{{
          questionnaireInfo.info2
        }}</el-descriptions-item>
        <el-descriptions-item label="问题六">{{
          questionnaireInfo.info3
        }}</el-descriptions-item>
      </el-descriptions>
    </el-dialog>

    <!--问卷信息编辑对话框-->
    <el-dialog v-model:visible="questionnaireEditVisible" width="40%" title="个人信息编辑" :close-on-click-modal="false"
      :show-close="false">
      <el-form :model="questionnaireInfo" label-width="100px">
        <el-form-item label="睡觉时间：" :rules="[{ required: true }]">
          <el-time-select v-model="questionnaireInfo.sleepTime" :picker-options="{
            start: '20:00',
            step: '00:30',
            end: '24:00'
          }">
          </el-time-select>
        </el-form-item>
        <el-form-item label="起床时间：" :rules="[{ required: true }]">
          <el-time-select v-model="questionnaireInfo.getupTime" :picker-options="{
            start: '4:00',
            step: '00:30',
            end: '14:00'
          }">
          </el-time-select>
        </el-form-item>
        <el-form-item label="爱好：" :rules="[{ required: true }]">
          <el-input v-model="questionnaireInfo.hobby"></el-input>
        </el-form-item>
        <el-form-item label="问题四：" :rules="[{ required: true }]">
          <el-input v-model="questionnaireInfo.info1"></el-input>
        </el-form-item>
        <el-form-item label="问题五：" :rules="[{ required: true }]">
          <el-input v-model="questionnaireInfo.info2"></el-input>
        </el-form-item>
        <el-form-item label="问题六：" :rules="[{ required: true }]">
          <el-input v-model="questionnaireInfo.info3"></el-input>
        </el-form-item>
      </el-form>
      <div class="dialog-footer">
        <el-button size="small" @click="cancelQuestionnaireEdit">取 消</el-button>
        <el-button type="primary" size="small" @click="determineQuestionnaireEdit">确 定</el-button>
      </div>
    </el-dialog>

    <!--新增tag对话框-->
    <el-dialog v-model:visible="addTagVisible" width="20%" title="请输入新增Tag" :close-on-click-modal="false"
      :show-close="false">
      <el-input v-model="newTag" maxlength="3" show-word-limit></el-input>
      <div class="dialog-footer">
        <el-button size="small" @click="cancelAddNewTag">取 消</el-button>
        <el-button type="primary" size="small" @click="determineAddNewTag">确 定</el-button>
      </div>
    </el-dialog>

    <!--删除tag对话框-->
    <el-dialog v-model:visible="deleteTagVisible" width="20%" title="请选择要删除的Tag" :close-on-click-modal="false"
      :show-close="false">
      <el-select v-model="deleteTag" placeholder="请选择">
        <el-option v-for="item in tagList" :key="item" :label="item" :value="item">
        </el-option>
      </el-select>
      <div class="dialog-footer">
        <el-button size="small" @click="cancelDeleteTag">取 消</el-button>
        <el-button type="primary" size="small" @click="determineDeleteTag">确 定</el-button>
      </div>
    </el-dialog>

    <!--组队信息tag-->
    <el-dialog v-model:visible="teamTagVisible" width="40%" title="组队Tag编辑" :close-on-click-modal="false"
      :show-close="false">
      <el-form :model="teamTagList" label-width="100px">
        <el-form-item label="Tag1：">
          <el-input v-model="teamTagList.tag1" maxlength="5" show-word-limit></el-input>
        </el-form-item>
        <el-form-item label="Tag2：">
          <el-input v-model="teamTagList.tag2" maxlength="5" show-word-limit></el-input>
        </el-form-item>
        <el-form-item label="Tag3：">
          <el-input v-model="teamTagList.tag3" maxlength="5" show-word-limit></el-input>
        </el-form-item>
      </el-form>
      <div class="dialog-footer">
        <el-button size="small" @click="cancelTeamTag">取 消</el-button>
        <el-button type="primary" size="small" @click="determineTeamTag">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Information',
  data() {
    return {
      personInfoIsShow: false,
      questionnaireInfoVisible: false,
      questionnaireEditVisible: false,
      addTagVisible: false,
      deleteTagVisible: false,
      teamTagVisible: false,
      groupState: true, // 是否进组， true是进组,false 是没进组
      personInfoList: {
        name: '张三',
        number: '10215101474',
        major: '软件工程',
        age: '19',
        gender: '1'
      },
      personInfoListTemp: {
        name: '',
        number: '',
        major: '',
        age: '',
        gender: ''
      },
      questionnaireInfo: {
        sleepTime: '9:00',
        getupTime: '7:00',
        hobby: '睡觉',
        info1: '全民制作人大家好',
        info2: '我是偶像练习生蔡徐坤',
        info3: '喜欢唱、跳、Rap、篮球'
      },
      questionnaireInfoTemp: {
        sleepTime: '',
        getupTime: '',
        hobby: '',
        info1: '',
        info2: '',
        info3: ''
      },
      tagList: ['唱歌', '跳舞', 'Rap', '篮球'],
      newTag: '',
      deleteTag: '',
      teamTagList: {
        tag1: '唱歌',
        tag2: '跳舞',
        tag3: '篮球'
      },
      teamTagListTemp: {
        tag1: '',
        tag2: '',
        tag3: ''
      }
    }
  },
  methods: {
    // 个人信息
    showPersonalInfo() {
      this.personInfoIsShow = true
      for (const i in this.personInfoList) {
        this.personInfoListTemp[i] = this.personInfoList[i]
      }
    },
    determinePersonalInfo() {
      if (this.personInfoList.name === '') {
        this.$message.error('请填写姓名')
      } else if (this.personInfoList.number === '') {
        this.$message.error('请填写学号')
      } else if (this.personInfoList.major === '') {
        this.$message.error('请填写专业')
      } else if (this.personInfoList.age === '') {
        this.$message.error('请填写年龄')
      } else {
        this.personInfoIsShow = false
      }
    },
    cancelPersonalInfo() {
      for (const i in this.personInfoList) {
        this.personInfoList[i] = this.personInfoListTemp[i]
      }
      this.personInfoIsShow = false
    },
    // 问卷更多信息
    showQuestionnaireInfo() {
      this.questionnaireInfoVisible = true
    },
    // 问卷编辑
    showQuestionnaireEdit() {
      this.questionnaireEditVisible = true
      for (const i in this.questionnaireInfo) {
        this.questionnaireInfoTemp[i] = this.questionnaireInfo[i]
      }
    },
    determineQuestionnaireEdit() {
      if (this.questionnaireInfo.sleepTime === '') {
        this.$message.error('请选择睡觉时间')
      } else if (this.questionnaireInfo.getupTime === '') {
        this.$message.error('请选择起床时间')
      } else if (this.questionnaireInfo.hobby === '') {
        this.$message.error('请填写爱好')
      }
      this.questionnaireEditVisible = false
    },
    cancelQuestionnaireEdit() {
      for (const i in this.questionnaireInfo) {
        this.questionnaireInfo[i] = this.questionnaireInfoTemp[i]
      }
      this.questionnaireEditVisible = false
    },
    // 添加tag
    addNewTag() {
      this.addTagVisible = true
    },
    determineAddNewTag() {
      if (this.newTag !== '') {
        this.tagList.push(this.newTag)
        this.addTagVisible = false
        this.newTag = ''
      } else {
        this.$message.error('请填写Tag内容')
      }
    },
    cancelAddNewTag() {
      this.newTag = ''
      this.addTagVisible = false
    },
    // 删除tag
    deleteTagShow() {
      this.deleteTagVisible = true
    },
    determineDeleteTag() {
      if (this.deleteTag !== '') {
        this.tagList.splice(this.tagList.indexOf(this.deleteTag), 1)
        this.deleteTagVisible = false
        this.deleteTag = ''
      } else {
        this.$message.error('请选择要删除的Tag')
      }
    },
    cancelDeleteTag() {
      this.deleteTagVisible = false
      this.deleteTag = ''
    },

    // 组队信息tag
    teamTagShow() {
      this.teamTagVisible = true
      for (const i in this.teamTagList) {
        this.teamTagListTemp[i] = this.teamTagList[i]
      }
    },
    determineTeamTag() {
      if (
        this.teamTagList.tag1 === '' ||
        this.teamTagList.tag2 === '' ||
        this.teamTagList.tag3 === ''
      ) {
        this.$message.error('请输入Tag')
      } else {
        this.teamTagVisible = false
      }
    },
    cancelTeamTag() {
      for (const i in this.teamTagList) {
        this.teamTagList[i] = this.teamTagListTemp[i]
      }
      this.teamTagVisible = false
    },
    // 退出小组
    leaveGroup() {
      this.$confirm('是否要退出本小组?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '退出成功!'
          })
          this.groupState = false
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.bg {
  margin: 20px 20px;
}

.left-col {
  width: 15%;
  height: 100%;
  /* background-color: #e94d86; */
  float: left;
}

.photo-box {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  // margin-left: 20px;
  // margin-top: 30px;
  margin: 80px auto;
  margin-bottom: 30px !important;
  /* background-color: green; */
}

.photo-box img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.right-col {
  width: 85%;
  height: 100%;
  /* background-color: aqua; */
  float: right;
}

.content-center {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  .direction {
    flex: 1;
    display: flex;

    .transverse {
      flex: 1;
      margin-top: 10px;
      margin-right: 20px;
      margin-left: 20px;
      // height: 275px;
      // background-color: yellowgreen;
    }
  }
}

.info-title {
  font-size: 28px;
  font-weight: 530;
  padding-left: 15px;
  height: 50px;
  /* background-color: blue; */
}

.info-block {
  margin-top: 10px;
  width: 100%;
  height: 220px;
  border-radius: 10px;
  background-color: white;
  padding-top: 15px;
  padding-bottom: 15px;
}

.info-block .block-left {
  width: 28%;
  float: left;
  text-align: right;
}

.info-block .block-right {
  width: 67%;
  /* background-color: darkorchid; */
  float: right;
}

:deep .el-tag {
  width: 92px;
  height: 50px !important;
  // padding: 0 20px;
  line-height: 50px !important;
  font-size: 15px;
  margin-right: 10px;
  margin-top: 10px;
  text-align: center;
}

.foot-tag {
  text-align: center;
}

:deep .foot-tag .el-tag {
  width: 80px;
  height: 35px !important;
  /* padding: 0 20px; */
  line-height: 35px !important;
  font-size: 12px;
  margin-right: 10px;
  margin-top: 0px;
  text-align: center;
}

.dialog-footer {
  margin-top: 20px;
  text-align: right;
  margin-right: 20px;
}
</style>
