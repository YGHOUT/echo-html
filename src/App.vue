<template>
<el-container id="app">
  <el-header>
    <Nav/>
  </el-header>
  <el-main>
    <router-view></router-view>
  </el-main>
</el-container>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  name: 'app',
  components: {
    Nav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
