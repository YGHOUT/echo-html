<template>
<div>
<!--  头像行-->
  <el-row>
    <el-col :span="8">
      <el-avatar :src="userShowInfo.userAvatar" />
    </el-col>
    <el-col :span="16"></el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: "ShowUser",
  created() {
    let id = this.$route.params.userid
    if (id===null){
      id = -1
    }
    this.getUserShowInfo(id)
  },
  data(){
    return{
    //  用户展示信息
      userShowInfo:{}
    }
  },
  methods:{
  //  获取用户信息 id=-1时获取本token对应的id
     async getUserShowInfo(id){
       const { data: res} = await this.$http.get('/user/showInfo?id='+id)
       if(res.meta.status!==200)return this.$message.error(res.meta.msg)
       this.userShowInfo = res.data
    }
  }
}
</script>

<style scoped>

</style>
