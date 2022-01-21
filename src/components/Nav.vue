<template>
  <div class="nav-header">
<!--    顶部栏左侧区-->
    <div>
<!--      顶部栏网站Logo-->
      <img src="../assets/至高点.png" id="header_logo" alt="资源丢失"
        @click="toWelcome">
<!--      网站名称-->
      <span @click="toWelcome">制高点</span>
<!--      板块区-->
      <div>
<!--        产品板块-->
        <el-dropdown  class="hover-button">
          <span style="color: white" @click="toProductSearch(-1,'')">
          产品
          </span>
          <el-dropdown-menu>
            <el-dropdown-item @click.native="toProductSearch(1,'')">游戏</el-dropdown-item>
            <el-dropdown-item @click.native="toProductSearch(2,'')">动漫</el-dropdown-item>
            <el-dropdown-item @click.native="toProductSearch(3,'')">影视</el-dropdown-item>
            <el-dropdown-item @click.native="toProductSearch(4,'')">音乐</el-dropdown-item>
            <el-dropdown-item @click.native="toProductSearch(5,'')">模型</el-dropdown-item>
            <el-dropdown-item @click.native="toProductSearch(6,'')">桌游</el-dropdown-item>
            <el-dropdown-item @click.native="toProductSearch(7,'')">卡牌</el-dropdown-item>
            <el-dropdown-item @click.native="toProductSearch(8,'')">书籍</el-dropdown-item>
            <el-dropdown-item @click.native="toProductSearch(9,'')">设计</el-dropdown-item>
            <el-dropdown-item @click.native="toProductSearch(10,'')">科技</el-dropdown-item>
            <el-dropdown-item @click.native="toProductSearch(0,'')">其他</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
<!--        论坛板块-->
        <div class="hover-button">
          <span>论坛</span>
        </div>
      </div>
    </div>
<!--    顶部栏右侧区-->
    <div>
<!--      搜索框-->
      <div style="margin:15px 10px;font-size: 15px">
        <el-input
            placeholder="请输入内容"
            v-model="searchKey">
        </el-input>
        <el-button size="mini" slot="append" icon="el-icon-search" @click="toProductSearch(-2,searchKey)"></el-button>
      </div>
<!--      私信按钮-->
      <div class="hover-button" >
        <i class="el-icon-message echo-icon"/>
      </div>
<!--      消息按钮-->
      <div class="hover-button">
        <i class="echo-icon el-icon-bell"/>
      </div>
<!--      默认头像-->
      <el-dropdown v-show="isShowLoginButton">
        <el-avatar
            @click="toLogin"
            style="margin-top: 5px"
            :size="50"
            :src="loginAvatar"
        />
        <el-dropdown-menu>
          <el-dropdown-item @click.native="toLogin">登录</el-dropdown-item>
          <el-dropdown-item @click.native="toLogin">注册</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
<!--      登录用户头像-->
      <el-dropdown v-show="!isShowLoginButton">
        <el-avatar
            @click="toUserDetail"
            style="margin-top: 5px"
            :size="50"
            :src="user.avatar"
        />
        <el-dropdown-menu>
          <el-dropdown-item @click.native="toUserDetail">个人主页</el-dropdown-item>
          <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  created() {
    if(window.sessionStorage.getItem('token')!=='null'){
      this.showLoginButton=false
    }
  },
  data () {
    return {
      showLoginButton: true,
      loginAvatar:'https://s.moimg.net/new/images/headPic.png',
      user:{
        avatar:'https://s.moimg.net/new/images/headPic.png'
      },
      searchKey:''
    }
  },
  computed: {
    //决定是否展示登录按钮还是注册按钮
    isShowLoginButton () {
      return this.showLoginButton
    }
  },
//  方法区
  methods: {
    //跳转到其他页面
    toLogin(){
      this.$router.push({path:'/loginOrRegister'})
    },
  //  退出登录
    logout(){
      window.sessionStorage.setItem('token',null)
      this.showLoginButton=true
      this.$router.push({path:'/welcome'})
    },
    //  跳转到首页
    toWelcome(){
      this.$router.push('/')
    },
  // 跳转到个人主页--根据token获取用户信息
    toUserDetail(){
      this.$router.push({path:'/userdetail'})
    },
  //  跳转到产品搜索页面
    toProductSearch(index,key){
      this.$router.push({name:'productSearch',params:{productTypeId:index,key:key}})
    }
  }

}
</script>

<style scoped>
#header_logo{
  width: 60px;
}
.nav-header{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.nav-header div{
  font-size: 18px;
  display: flex;
  align-content: center;
}
/*顶部栏的文字*/
.nav-header div span{
  line-height: 60px;
  margin: 0 15px ;
  cursor: pointer;
}
/*悬停时样式*/
.hover-button:hover {
  background-color: #9d56ae;
}
/*icon的样式*/
.echo-icon{
  font-size: 30px;
  line-height: 60px;
  margin: 0 15px;
}
.echo-icon:hover{
  cursor: pointer;
}

</style>
