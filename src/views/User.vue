<template>
<el-container id="userDetail">
  <el-header>
    <Nav></Nav>
  </el-header>
  <el-main>
    <!--  个人主页-->
    <el-row>
      <!--  左白边-->
      <el-col :span="1">&nbsp;</el-col>
      <!--  内容主页-->
      <el-col :span="22">
        <el-container>
          <!--      左侧功能区域-->
          <el-aside>
            <!--        菜单-->
            <el-menu :default-active="$route.path"
                     active-text-color="#9d56ae"
                     router>
              <!--          展示页-->
              <el-menu-item index="/userdetail/showuser">展示页</el-menu-item>
              <!--          消息中心-->
              <el-divider></el-divider>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-message"/>
                  <span></span>消息中心
                </template>
                <!--            我的主题-->
                <el-menu-item index="/userdetail/theme">
                  <span>我的主题</span>
                </el-menu-item>
                <!--            @我-->
                <el-menu-item index="/userdetail/callme">
                  <span>@我</span>
                </el-menu-item>
                <!--            私信-->
                <el-menu-item index="/userdetail/privateletter">
                  <span>私信</span>
                </el-menu-item>
                <!--            我的发言-->
                <el-menu-item index="/userdetail/speak">
                  我的发言
                </el-menu-item>
              </el-submenu>
              <!--          产品中心-->
              <el-divider/>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-box"/>
                  <span>产品中心</span>
                </template>
                <!--            收藏的产品-->
                <el-menu-item index="/userdetail/collectibleproducts">
                  <span>收藏的产品</span>
                </el-menu-item>
                <!--            订单-->
                <el-menu-item index="/userdetail/order">
                  <span>订单</span>
                </el-menu-item>
                <!--            发布的产品-->
                <el-menu-item index="/userdetail/releasedproducts">
              <span>
                发布的产品
              </span>
                </el-menu-item>
              </el-submenu>
              <!--          设置中心-->
              <el-divider></el-divider>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-setting"/>
              <span>
                设置中心
              </span>
                </template>
                <!--              个人信息-->
                <el-menu-item index="/userdetail/userinfo">
                  <span>个人信息</span>
                </el-menu-item>
                <!--              收获地址-->
                <el-menu-item index="/userdetail/address">
                  <span>收货地址</span>
                </el-menu-item>
                <!--              认证-->
                <el-menu-item index="/userdetail/certification">
                  <span>认证</span>
                </el-menu-item>
              </el-submenu>
            </el-menu>
          </el-aside>
          <!--      右侧内容区-->
          <el-main class="echo-user-main">
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-col>
      <!--  -->
      <el-col :span="1">&nbsp;</el-col>
    </el-row>
  </el-main>
</el-container>
</template>

<script>
import Nav from '@/components/Nav'
export default {
  components: {Nav},
  name: "User",
  created() {
    this.checkToken()
    console.log(this.$route)
  },
  data(){
    return{
      userinfo: {},
    //  左侧菜单激活菜单
      asideActiveMenu: '/userdetail/showuser'
    }
  },
  methods:{
  //  验证用户是否登录，查看token,并获取用户信息
    async checkToken(){
      if(window.sessionStorage.getItem('token')){
        const { data: res } = await this.$http.get('/user/selfinfo')
        if(res.meta.status!==200)return this.$message.error(res.meta.msg)
        console.log(res)
        this.userinfo = res.data
      }else{
        this.$message.error("用户未登录。")
        await this.$router.push('/welcome')
      }
    }
  }
}
</script>

<style>
#userDetail{
  color: #0F111A;
}
.echo-user-main{
  background-color: white;
}
</style>
