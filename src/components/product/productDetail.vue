<template>
<div>
<!--  产品展示行-->
  <el-row>
    <el-col :span="20" :offset="2">
      <el-card>
        <el-row>
<!--          产品图片展示列-->
          <el-col :span="10">
            <el-carousel
                trigger="click"
                height="450px"
            >
              <el-carousel-item
                  v-for="(img,index) in product.images"
                  :key="index"
              >
                <el-image :src="img"
                          fit="fit"
                />
              </el-carousel-item>
            </el-carousel>
          </el-col>
<!--          产品信息展示列-->
          <el-col :span="14">
<!--            产品名称行-->
            <el-row>
              <b style="font-size: 30px;">
                {{product.name}}
              </b>
            </el-row>
<!--            开发者-->
            <el-row style="font-size: 25px;margin-top: 15px">
              <el-image :src="product.user.avatar" style="height: 30px;width: 30px;margin-right: 15px;vertical-align:middle" class="echo-cursor-pointer"/>
              <b class="echo-cursor-pointer">{{product.user.username}}</b>
            </el-row>
<!--            目标金额，当前金额和进度条-->
            <el-row class="echo-product-row-margin-top">
<!--            众筹进度条-->
              <el-col :span="12">
                <el-progress v-if="!isNaN(amountProgress)" type="circle" :percentage="amountProgress" :stroke-width="20"/>
              </el-col>
<!--              目标金额、当前金额和支持人数-->
              <el-col :span="12">
<!--                目标金额-->
                <span class="echo-product-amount echo-product-detail-font-style">目标金额：${{product.targetAmount}}</span>
                <br>
<!--                当前金额-->
                <span class="echo-product-amount echo-product-detail-font-style">当前金额：${{product.currentAmount}}</span>
                <br>
<!--                支持人数-->
                <span class="echo-product-amount echo-product-detail-font-style">支持人数：{{product.supporters}}</span>
              </el-col>
            </el-row>
<!--            开始时间和限期时间-->
            <el-row class="echo-product-row-margin-top">
<!--              开始时间-->
              <el-col :span="11"><span class="echo-product-detail-font-style">{{product.startTime}}</span></el-col>
<!--              分割线-->
              <el-col :span="2"><span class="echo-product-detail-font-style">——</span></el-col>
<!--              限期时间-->
              <el-col :span="11"><span class="echo-product-detail-font-style">{{product.deadline}}</span></el-col>
            </el-row>
<!--            功能按钮：支持，收藏-->
            <el-row class="echo-product-row-margin-top">
<!--              支持按钮-->
              <el-col :span="12">
                <el-button @click="showSupportOptionsDialog=true">支持</el-button>
              </el-col>
<!--              收藏按钮-->
              <el-col :span="12">
                <el-button
                    @click="isLogin()?onCollectProduct():''"
                >收藏</el-button>
              </el-col>
            </el-row>
<!--            辅助填充行-->
            <el-row class="echo-product-row-margin-top">
<!--              支持功能的帮助描述-->
              <el-col :span="12">
                <span style="color: #8F93A2">点击支持按钮，会弹出对话框，展示当前产品的所有支持项，用户从列表中选择支持项并点确定按钮</span>
              </el-col>
<!--              已收藏人数-->
              <el-col :span="12">
                已收藏人数：{{product.collectors}}
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
<!--      评论和产品描述-->
      <el-tabs class="echo-product-row-margin-top"
        v-model="tabsCurrentPane"
               type="border-card"
        style="border-radius: 5px;"
      >
<!--        评论页-->
        <el-tab-pane
            name="-1"
            label="评论"
        >
<!--          一级回复按钮行-->
          <el-row class="echo-comment-row">
<!--            用户信息列-->
            <el-col :span="6" class="echo-comment-avatar">
              <el-avatar :src="currentUser.avatar"></el-avatar>
              <span>{{currentUser.username}}</span>
            </el-col>
<!--            按钮列-->
            <el-col :span="18" style="background-color: white">
              <el-button style="height: 50px"
                         @click="isLogin()?onComment():''"
              >回复</el-button>
            </el-col>
          </el-row>
<!--          评论列表行-->
          <el-row v-for="(comment,index) in comments"
                  :key="index"
                  class="echo-comment-row"
          >
<!--            <el-divider></el-divider>-->
<!--            发言者头像列-->
            <el-col :span="6"
                    class="echo-comment-avatar"
            >
              <el-avatar :src="comment.user.avatar"/>
              <span>{{comment.user.username}}</span>
            </el-col>
<!--            评论内容列-->
            <el-col :span="18"
                    class="echo-comment-content"
            >
<!--              发布时间行-->
              <el-row>
<!--                时间-->
                <span style="color: #7a88a3">发布于{{comment.createTime}}</span>
<!--                回复按钮-->
                <el-button style="height: 20px;padding: 5px;float: right"
                           type="mini"
                           @click="isLogin()?onReplyToComment(comment.productCommentId,comment.user.userId):''"
                >回复</el-button>
              </el-row>
<!--              分割线-->
              <el-divider></el-divider>
<!--              一级评论内容行-->
              <el-row>
                <span>{{comment.content}}</span>
              </el-row>
<!--              二级评论内容行-->
              <el-row class="echo-product-row-margin-top"
                      v-if="comment.children!==undefined"
              >
<!--                缩进列-->
                <el-col :span="4">&nbsp;</el-col>
<!--                二级评论列-->
                <el-col :span="20"
                        style="padding: 5px;background-color: #f2f5fa"
                >
<!--                  二级评论循环-->
                  <el-row
                      v-for="(children,index2) in comment.children"
                      :key="index2"
                      class="echo-product-row-margin-top"
                  >
<!--                    发言者-->
                    <b>{{children.user.username}}</b>回复
<!--                    被回复者-->
                    <b>{{children.replyUser.username}}</b>：
<!--                    回复内容-->
                    <span>{{children.content}}</span>
                    <br>
<!--                    回复时间-->
                    <span style="">{{children.createTime}}</span>
<!--                    回复按钮-->
                    <el-button type="mini" style="height: 17px;margin-left: 20px;padding: 0 12px"
                               @click="isLogin()?onReplyToReply(comment.productCommentId,children.productReplyId,children.user.userId):''"
                    >回复</el-button>
                  </el-row>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-tab-pane>
<!--        产品描述页-->
        <el-tab-pane
            v-for="(describe,index) in productDescribes"
            :key="index"
            :name="index+''"
            :label="describe.title"
        >
<!--        发布时间和内容-->
          <div style="padding: 5px">
<!--            发布时间-->
            <el-row>
              <el-col :offset="2"
                      :span="20"
                      style="text-align: left;color: #888888"
              >
                发布于：{{describe.createTime}}
              </el-col>
            </el-row>
            <el-row>
              {{describe.content}}
            </el-row>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
<!--  选择支持项的对话框-->
  <el-dialog
      title="选择支持项"
      :visible.sync="showSupportOptionsDialog"
      width="30%"
      :before-close="isSelectSupportOption">
<!--    选项行-->
    <el-row v-for="(options,index) in productSupportOptions"
      :key="index"
            class="echo-product-row-margin-top"
    >
<!--      选项的卡片，包括单选按钮和描述-->
      <el-card>
        <template v-slot:header>
<!--          单选按钮-->
          <el-radio border
            class="echo-support-options-card-header"
                    v-model="optionsId"
                    :label="options.optionsId"
                    :disabled="isAllSelected(options.selectedNumber,options.totalNumber)"
          >
<!--            支持项必要参数，金额，已选数量，总数量-->
            <span>
              ￥{{options.optionsAmount}}
              (已支持:{{options.selectedNumber}}
              <span v-if="options.totalNumber!==undefined">
                /{{options.totalNumber}}
              </span>)
              ：{{options.optionsTitle}}
            </span>
          </el-radio>
        </template>
<!--        支持项描述-->
        {{options.optionsContent}}
      </el-card>
    </el-row>
<!--    对话框功能行，关闭，确定-->
    <span slot="footer" class="dialog-footer">
<!--      关闭功能-->
    <el-button @click="showSupportOptionsDialog = false">取 消</el-button>
<!--      确定功能-->
    <el-button type="primary" @click="isLogin()?toPay():''">确 定</el-button>
  </span>
  </el-dialog>
<!--  回复的编辑器对话框-->
  <el-dialog
      title="编辑器对话框"
      :visible.sync="showEditorDialog"
      width="40%"
  >
<!--    编辑器-->
    <quill-editor
        v-model="editorContext"
        ref="commentsQuilEditor"
        :options="editorOptions"
    >
    </quill-editor>
<!--    对话框功能区-->
    <template v-slot:footer>
<!--      取消按钮-->
      <el-button @click="showEditorDialog = false">取 消</el-button>
<!--      确定按钮-->
      <el-button type="primary" @click="onEditorSure">确 定</el-button>
    </template>
  </el-dialog>
</div>
</template>

<script>
export default {
  name: "product",
  created() {
    this.productId = this.$route.query.productId
    if(this.productId!=='null'){
      this.getProductDetail(this.productId)
      this.getSupportOptions()
      this.getComments()
      this.getDescribe()
    }else{
      this.$message.error('无法获取商品id')
    }
    if (window.sessionStorage.getItem('token')!=='null'){
      this.getUserInfo()
    }
  },
  data(){
    return{
    //  当前产品id
      productId: 0,
      // 产品信息
      product:{
        user:{
          avatar:''
        }
      },
    //  产品支持项
      productSupportOptions:[],
    //  决定展示选择支持项的对话框
      showSupportOptionsDialog:false,
      //      选择的选项Id
      optionsId:-1,
    //  评论和产品描述选项卡的当前展示页
      tabsCurrentPane:'-1',
    //  展示编辑器的布尔值
      showEditorDialog:false,
    //  编辑器双向绑定的数据
      editorContext:'',
    //  编辑器设置
      editorOptions:{
        //  工具栏
        modules:{
          toolbar:[
            //  字体：加粗，斜体，下划线，删除线
            ['bold','italic','underline','strike'],
            //  标题：一级，二级
            [{'header':1},{'header':2}],
            //  列表：有序，无序
            [{'list':'ordered'},{'list':'bullet'}],
            //  角标：下角标，上角标
            [{'script':'sub'},{'script':'super'}],
            //  缩进：向左，向右
            [{'indent':'-1'},{'indent':'+1'}],
            //  颜色，背景色
            [{'color':[]},{'background':[]}],
          //    对齐方式
              [{'align':[]}]
          ]
        },
      //  提示语句
        placeholder:'请输入内容！',
      //  主题
        theme:'snow'
      },
    //  当前用户
      currentUser:{
        avatar:'https://s.moimg.net/new/images/headPic.png',
        username:'未登录用户',
        userId:-1
      },
    //  当前回复的性质：若为undefined,则报错
      currentComment:{
        //若一级评论不为-1或为undefined，则为二级评论
        productCommentId:-1,
        //若评论Id大于-1且回复id==-1，则是回复一级评论的
        productReplyId:-1,
        //被回复者的id
        replyUserId:-1
      },
    //  评论列表
      comments:[],
      //产品描述页
      productDescribes:[]
    }

  },
  methods:{
    // 获取产品展示信息（不包括支持项）
    async getProductDetail(id){
      const { data: res } = await this.$http.get('/product/infoById?productId='+id)
      console.log(res)
      if(res.meta.status!==200)return this.$message.error(res.meta.msg)
      this.product=res.data
    },
    // 获得用户支持项
    async getSupportOptions(){
      const { data: res } = await this.$http.get('/product/optionsById?productId='+this.productId)
      if (res.meta.status!==200)return this.$message.error(res.meta.msg)
      this.productSupportOptions=res.data
    },
  //  获得评论列表
    async getComments(){
      const { data: res } = await this.$http.get('/comments/commentsByProduct?productId='+this.productId)
      if (res.meta.status!==200)return this.$message.error(res.meta.msg)
      this.comments=res.data
    },
  //  获得用户头像信息
    async getUserInfo(){
      const { data: res } = await this.$http.get('/user/info')
      if (res.meta.status!==200)return this.$message.error(res.meta.msg)
      this.currentUser=res.data
    },
    //获得产品描述
    async getDescribe(){
      const {data:res} = await this.$http.get('/product/describeById?productId='+this.productId)
      if(res.meta.status!==200)return this.$message.error(res.meta.msg)
      this.productDescribes = res.data
    },
  //  判断用户是否选择支持项目
    isSelectSupportOption(done){
      console.log(done)
      done()
    },
  //  判断该支持项是否已经被选完
    isAllSelected(selected,total){
      if(total===undefined) return false
      return selected<=total
    },
  //  跳转到支付页面
    toPay(){
      if (this.optionsId!==-1){
        this.$message.info("支持了"+this.optionsId)
        this.showSupportOptionsDialog = false
      }else{
        this.$message.error("未选择支持项！")
      }

    },
  //  编辑器-失去焦点事件
    onEditorBlur(){},
  //  编辑器-获得焦点事件
    onEditorFocus(){},
  //  编辑器-内容修改事件
    onEditorChange(){
      console.log(this.editorContext)
    },
  //  编辑器对话框--确定事件
    onEditorSure(){
    //  先确定编辑器是否有内容
      if (this.editorContext.trim().length<1){
        this.$message.error("没有回复内容")
        return
      }
    //  根据回复性质发起不同的请求
      if(this.currentComment.productCommentId===undefined||this.currentComment.productCommentId<0){
        this.currentComment.content=this.editorContext
        console.log("评论："+this.currentComment)
      }else{
        this.currentComment.content=this.editorContext
        console.log("回复："+this.currentComment)
      }
      this.editorContext = ''
      this.currentComment = {}
      this.showEditorDialog = false
    },
  //  登录检查
    isLogin(){
      if (window.sessionStorage.getItem('token')!=='null'){
        return true
      }else{
        this.$message.error("请先登录")
        return false
      }
    },
  //  评论按钮
    onComment(){
      this.showEditorDialog=true
    },
  //  回复评论按钮
    onReplyToComment(productCommentId,replyUserId){
      this.currentComment.productCommentId=productCommentId
      this.currentComment.replyUserId=replyUserId
      this.showEditorDialog=true
    },
  //  回复回复按钮
    onReplyToReply(productCommentId,productReplyId,replyUserId){
      this.currentComment.productCommentId=productCommentId
      this.currentComment.replyUserId=replyUserId
      this.currentComment.productReplyId=productReplyId
      this.showEditorDialog=true
    },
    // 收藏按钮
    async onCollectProduct(){
      const {data: res} = await this.$http.post('/product/collect',{})
      this.$message.info(res.meta.msg)
    }
  },
//  计算属性
  computed:{
    // 计算众筹百分比
    amountProgress(){
      const percentage = parseInt((this.product.currentAmount/this.product.targetAmount)*100+'')
      return percentage>100?100:percentage
    }
  }
}
</script>

<style scoped>
/*产品描述区域文字大小*/
.echo-product-detail-font-style{
  font-size: 25px;
  display: block;
  height: 30px;
  line-height: 30px;
  text-align: center;
}
/*自定义行上间距*/
.echo-product-row-margin-top{
  margin-top: 10px;
}
/deep/ .el-card__header,.el-card__body{
  padding:5px;
}
/*设置支持选项列表的标题格式*/
.echo-support-options-card-header{
  width: 100%;
  margin:0;
  height: 30px;
  text-align: left;
}
/*评论页评论行样式*/
.echo-comment-row{
  background-color: #f2f5fa;
  margin-top: 5px;
}
/*评论页头像列样式*/
.echo-comment-avatar{
  min-height: 50px;
  height: 100%;
  padding: 5px 10px;
  text-align: left;
}
.echo-comment-avatar el-avatar,.echo-comment-avatar span{
  float:left;
}
.echo-comment-avatar el-avatar:hover,.echo-comment-avatar span:hover{
  cursor: pointer;
}
.echo-comment-avatar span{
  margin-left: 15px;
  display:block;
  line-height: 40px;
}
/*水平分割线的上下间距*/
/deep/ .el-divider--horizontal{
  margin:4px 0;
}
/*评论内容列*/
.echo-comment-content{
  padding: 5px;
  background-color: white;
  /*border: #0F111A ridge 1px;*/
  text-align: left;
}
</style>
