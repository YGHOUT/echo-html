<template>
  <div class="home">
    <el-container>
      <el-header>
        <Nav></Nav>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        脚部栏
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
export default {
  components:{
    Nav
  }
}
</script>
<style scoped>

</style>
