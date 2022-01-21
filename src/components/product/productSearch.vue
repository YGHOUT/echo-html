<template>
<div>
  <span style="color: white">商品搜索界面=</span>
</div>
</template>

<script>
export default {
  name: "productSearch",
  created() {
    this.guang()
  },
  methods:{
    guang(){
      console.log(this.$route.params)
    }
  }
}
</script>

<style scoped>

</style>
