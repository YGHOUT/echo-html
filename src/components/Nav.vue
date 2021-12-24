<template>
  <div class="nav-header">
    <div>
      <img src="../assets/至高点.png" id="header_logo">
      <span @click="toOther('/')">制高点</span>
    </div>
    <div class="hover-button">
        <span v-if="isShowLoginButton" @click="toOther('/login')">
          登录
        </span>
      <span v-else>
          个人主页
        </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data () {
    return {
      showLogin: true
    }
  },
  computed: {
    //决定是否展示登录按钮还是注册按钮
    isShowLoginButton () {
      return this.showLogin
    }
  },
//  方法区
  methods: {
    toOther(url){
      this.$router.push(url)
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
  font-size: 25px;
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
</style>