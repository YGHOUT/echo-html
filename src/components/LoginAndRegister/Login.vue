<template>
<!--  登录与注册区域-->
  <el-tabs v-model="tabCurrentName" stretch type="border-card" class="myTabsStyle" :before-leave="tabBeforeLeave">
<!--    登录标签区域-->
    <el-tab-pane label="登录" name="loginForm" >
      <el-form :model="userInfoForm" ref="loginFormRef" label-width="100px" label-position="right" :rules="infoFormRules">
        <el-form-item label="用户名:" prop="username">
          <el-input placeholder="用户名" v-model="userInfoForm.username" clearable/>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input type="password" placeholder="用户密码" v-model="userInfoForm.password" clearable/>
        </el-form-item>
<!--        功能按钮区域-->
        <el-form-item class="buttonStyle">
          <el-button type="info" round @click="resetForm('loginForm')">重置</el-button>
          <el-button type="primary" round @click="formValidate('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
<!--    注册标签区域-->
    <el-tab-pane label="注册" name="registerForm" >
        <el-form :model="userInfoForm" ref="registerFormRef" :rules="infoFormRules">
<!--          用户名-->
          <el-form-item label="用户名:" label-width="100px" prop="username">
            <el-input placeholder="用户名" v-model="userInfoForm.username"/>
          </el-form-item>
<!--          密码-->
          <el-form-item label="密码:" label-width="100px" prop="password">
            <el-input placeholder="用户密码" v-model="userInfoForm.password"/>
          </el-form-item>
<!--          再次确定密码-->
          <el-form-item label="确认:" label-width="100px" prop="passwordCheck">
            <el-input placeholder="再次输入密码" v-model="userInfoForm.passwordCheck"/>
          </el-form-item>
<!--          电话号码-->
          <el-form-item label="电话:" label-width="100px" prop="phone">
            <el-input placeholder="手机号码" v-model="userInfoForm.phone"/>
          </el-form-item>
<!--          邮箱-->
          <el-form-item label="邮箱" label-width="100px" prop="email">
            <el-input placeholder="电子邮箱" v-model="userInfoForm.email"/>
          </el-form-item>
          <!--        功能按钮区域-->
          <el-form-item class="buttonStyle">
            <el-button type="info" round @click="resetForm('registerForm')">重置</el-button>
            <el-button type="primary" round @click="formValidate('registerForm')">注册</el-button>
          </el-form-item>
        </el-form>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: "Login",
  //数据
  data() {
    return{
      //登录和注册共用表单
      userInfoForm: {
        username: '',
        password: '',
        passwordCheck: '',
        phone: '',
        email: ''
      },
    //  标签页的当前开启页的name
      tabCurrentName: 'loginForm',
    //  card的body样式
      carBodyStyle: {
        padding: '5px'
      },
    //  表单验证规则
      infoFormRules: {
        username:[
          { required:true,message:'请输入用户名' }
        ],
        password: [
          { required:true,message:'请输入用户密码' }
        ],
        passwordCheck: [
          { required:true, message:'请再次输入密码' },
          { validator:(rule,value,callback)=>{
            if(this.userInfoForm.password === value){
              callback()
            }else {
              callback(new Error('两次密码不一致'))
            }
            }}
        ],
        //验证手机号码
        phone: [
          {validator:(rule,value,callback)=>{
              if(/^1[3456789]\d{9}$/.test(value)) {
                callback()
              }else{
                callback(new Error('手机号码格式错误，只接受1开头的11位号码。'))
              }
            }
          }
        ],
      //  验证邮箱
        email:[
          {validator:(rule,value,callback)=>{
            if(/^([0-9a-zA-Z_\.\-\])+\@([0-9a-zA-Z_\.\-\])+\.([a-zA-Z]+)$/.test(value)){
              callback()
            }else{
              callback(new Error('邮箱格式错误。'))
            }
          }
          }
        ]
      }
    }
  },
//  方法
  methods: {
    //重置表单
    resetForm (val) {
      if(val === 'registerForm') this.$refs.registerFormRef.resetFields()
      else if (val === 'loginForm') this.$refs.loginFormRef.resetFields()
    },
  //  切换标签之前的钩子
    tabBeforeLeave (activeName,oldName){
      console.log(this.$refs)
      this.resetForm(oldName)
    },
  //  执行校验方法
    formValidate(val){
      if(val === 'registerForm') this.$refs.registerFormRef.validate((ok,who)=>{
        if(ok){
          this.asyncRegisterRequest()
        }
      })
      else if (val === 'loginForm') this.$refs.loginFormRef.validate((ok,who)=>{
        if(ok){
          this.asyncLoginRequest()
        }
      })
    },
  //  登录的异步请求函数
    async asyncLoginRequest() {
      const { data: res} = await this.$http.post('/user/login',this.userInfoForm)
      console.log(res)
      if(res.meta.status!==200)return this.$message.error(res.meta.msg)
      window.sessionStorage.setItem('token',res.data.token)
      await this.$router.push('/home')
      location.reload()
    },
  //  注册的异步请求
    async asyncRegisterRequest(){
      const { data: res } = await this.$http.post('/user/register',this.userInfoForm)
      console.log(res)
      if(res.meta.status!==200)return this.$message.error(res.meta.msg)
      window.sessionStorage.setItem('token',res.data.token)
      await this.$router.push('/home')
      location.reload()
    }
  }
}
</script>

<style scoped>
.myTabsStyle{
  width: 600px;
  margin: 20px auto;
}
/*按钮样式*/
.buttonStyle{
  margin-bottom: 5px;
  /*浮动*/
  display: flex;
  /*尾部对齐*/
  justify-content: flex-end;
}
</style>
