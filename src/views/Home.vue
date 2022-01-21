<template>
  <div class="home">
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
export default {
  components:{
    Nav
  },
  data(){
    return {
    }
  }
}
</script>
<style scoped>

</style>
