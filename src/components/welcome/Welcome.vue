<template  style="min-width: 1080px">
  <div>
<!--  走马灯行-->
  <el-row id="carousel">
<!--    左白边列-->
    <el-col :span="3">&nbsp;</el-col>
<!--   中央内容展示列-->
    <el-col :span="18">
    <!--  走马灯行-->
      <el-row>
        <el-carousel height="540">
          <el-carousel-item v-for="(item,index) in carouselImages" :key="index"
            @click.native="toProductDetail(item.productId)">
            <img :src="item.images[0]" alt="图片丢失" style="width: 1080px;height: 540px" class="echo-hover-pointer">
          </el-carousel-item>
        </el-carousel>
      </el-row>
    </el-col>
<!--    右白边列-->
    <el-col :span="3">&nbsp;</el-col>
  </el-row>
  <!--      众筹排名行-->
  <el-row style="margin-top: 15px" id="ranking">
    <el-col :span="3">&nbsp;</el-col>
    <!--        二十四小时金额排名-->
    <el-col :span="10" style="background-color: white;">
      <b style="font-size: 25px;color: #0F111A">二十小时金额榜</b>
      <el-tabs tab-position="left" type="border-card"
        v-model="amountsOf24HActiveName">
        <el-tab-pane
            v-for="(item,index) in amountsOf24H"
            :label="index+1+''"
            :name="index+''"
            :key="index"
            >
          <el-row :gutter="10">
<!--            商品图片-->
            <el-col :span="12">
              <el-image class="echo-cursor-pointer" :src="item.images[0]" style="height: 265px;width: 265px;"
                @click="toProductDetail(item.productId)"></el-image>
            </el-col>
            <el-col :span="12" style="color: #0F111A">
<!--              商品名称-->
              <b style="font-size: 18px" class="echo-cursor-pointer"
                @click="toProductDetail(item.productId)">
                {{item.name}}
              </b>
<!--              创作者名称-->
              <el-row style="margin-top: 15px" @click.native="toAuthor(item.user.userId)">
                <el-image :src="item.user.avatar" style="height: 30px;width: 30px;margin-right: 15px;vertical-align:middle" class="echo-cursor-pointer"/>
                <b class="echo-cursor-pointer">{{item.user.username}}</b>
              </el-row>
<!--              总凑金额-->
              <el-row style="margin-top: 10px">
                <el-col :span="12"><b style="color: #42b983;font-size: 20px">￥ {{item.currentAmount}}</b></el-col>
                <el-col :span="12"><b style="color: #42b983;font-size: 20px">{{getPercent(item.currentAmount,item.targetAmount)}}%</b></el-col>
              </el-row>
<!--              百分比条-->
              <el-progress :percentage="getPercent(item.currentAmount,item.targetAmount)" :width="70" type="circle" color="#42b983"></el-progress>
<!--              支持者人数和评论人数-->
              <el-row style="margin-top: 15px">
                <el-col :span="12"><span style="color: #6a6b6e;font-size: 15px">支持者 {{item.supporters}}</span></el-col>
                <el-col :span="12"><span style="color: #6a6b6e;font-size: 15px">评论 {{item.comments}}</span></el-col>
              </el-row>
            </el-col>
          </el-row>

        </el-tab-pane>
      </el-tabs>
    </el-col>
    <el-col :span="1">&nbsp;</el-col>
    <!--        二十四小时收藏排名-->
    <el-col :span="7" style="background-color: white">
<!--      总标题-->
      <span style="color: #0F111A;font-size: 25px">二十四小时收藏榜</span>
<!--      单个项目-->
      <el-collapse v-model="collectionCollapseActiveName" accordion>
        <el-collapse-item v-for="(item,index) in collectionOf24H"
                          :key="index"
                          :name="index+1" style="padding: 0 0 0 0;">
          <template v-slot:title>
<!--            单个标题和收藏数量-->
            <span class="echo-span-mixWidth">{{item.name}}</span>
            <i class="el-icon-star-off" style="font-size: 18px;margin: 0 5px"></i>
            <span style="font-size: 18px">{{item.collectors}}</span>
          </template>
<!--          展示更详细的信息-->
          <el-row>
<!--            产品图片-->
            <el-col :span="4">
              <el-image :src="item.images[0]" style="height: 50px;width: 50px" class="echo-cursor-pointer"></el-image>
            </el-col>
            <el-col :span="20">
<!--              产品名称-->
              <span class="echo-cursor-pointer">{{item.name}}</span>
              <br>
              <el-row>
<!--                当前金额和人数-->
                <el-col :span="12">
                  金额/人数：{{item.currentAmount}}/{{item.supporters}}
                </el-col>
<!--                开发者信息-->
                <el-col :span="12">
                  <el-image :src="item.user.avatar" style="height: 30px;width: 30px;margin-right: 15px;vertical-align:middle" class="echo-cursor-pointer"/>
                  <b class="echo-cursor-pointer">{{item.user.username}}</b>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-collapse-item>
      </el-collapse>
    </el-col>
    <el-col :span="3">&nbsp;</el-col>
  </el-row>
<!--  推荐项目-->
  <el-row v-for="(recommend,index) in recommends" :key="index">
    <el-col :offset="3" :span="18" style="margin-top: 10px">
      <el-card>
        <div slot="header" style="font-size: 15px;margin:0">
          <span>{{recommend.name}}</span>
          <span class="echo-recommend-row-function-span">刷新</span>
          <span class="echo-recommend-row-function-span">更多</span>
        </div>
        <el-row>
          <!--        展示卡片-->
          <el-col :span="4" :offset="index>0?1:0"  :key="index"
                  v-for="(product,index) in recommend.recommendProducts">
            <el-card :body-style="{ padding: '0px' }"
                     class="echo-recommend-card"
                     @click.native="toProductDetail(product.productId)"
                     shadow="hover">
              <!--          商品图片-->
              <el-image :src="product.images[0]"  class="echo-recommend-card-image"/>
              <el-image :src="product.images[0]"  class="echo-recommend-card-image"/>
              <!--          产品名称-->
              <span class="echo-recommend-card-span-margin-top">
            {{product.name}}</span>
              <!--          创作者信息-->
              <el-row class="echo-recommend-card-span-margin-top">
                <!--            创作者头像-->
                <el-image :src="product.user.avatar" class="echo-recommend-card-icon"
                />
                <!--            创作者名字-->
                <span>
              {{product.user.username}}</span>
              </el-row>
              <!--          产品众筹情况-->
              <el-row
                  class="echo-recommend-card-span-margin-top">
                <!--            已众筹金额-->
                <el-col :span="12"
                        class="echo-product-amount">
                  ￥{{product.currentAmount}}</el-col>
                <!--            已众筹比例-->
                <el-col :span="12"
                        class="echo-product-amount">
                  {{getPercent(product.currentAmount,product.targetAmount)}}%</el-col>
              </el-row>
              <!--          已众筹金额百分比-->
              <el-progress
                  class="echo-recommend-card-span-margin-top"
                  :percentage="getPercent(product.currentAmount,product.targetAmount)"
                  status="success"
              />
              <!--          支持人数-->
              <span
                  class="echo-recommend-card-span-margin-top">
              众筹支持者：{{product.supporters}} 人
            </span>
            </el-card>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
<!--  <el-row -->
<!--    style="margin-top: 15px;">-->
<!--    <el-col :span="3">&nbsp;</el-col>-->
<!--    <el-col :span="18">-->
<!--&lt;!&ndash;      单个推荐类型行&ndash;&gt;-->
<!--      <el-row class="echo-recommend-row">-->
<!--&lt;!&ndash;        类型名&ndash;&gt;-->
<!--        <el-col :span="20" class="echo-recommend-row-name">-->
<!--          {{recommend.name}}-->
<!--        </el-col>-->
<!--&lt;!&ndash;        刷新和跳转功能&ndash;&gt;-->
<!--        <el-col :span="4">-->

<!--        </el-col>-->
<!--      </el-row>-->
<!--&lt;!&ndash;      展示行&ndash;&gt;-->
<!--      <el-row>-->
<!--        <el-col :span="4" >-->

<!--        </el-col>-->
<!--      </el-row>-->
<!--      <el-row>-->
<!--&lt;!&ndash;        展示卡片&ndash;&gt;-->
<!--        <el-card :body-style="{ padding: '0px' }" v-for="(product,index) in recommend.recommends" :key="index"-->
<!--          class="echo-recommend-card"-->
<!--                 shadow="hover">-->
<!--&lt;!&ndash;          商品图片&ndash;&gt;-->
<!--          <el-image :src="product.productImg"  class="echo-recommend-card-image"-->
<!--                    @click="toProductDetail(product.productId)"/>-->
<!--&lt;!&ndash;          产品名称&ndash;&gt;-->
<!--          <span @click="toProductDetail(product.productId)"-->
<!--            class="echo-recommend-card-span-margin-top">-->
<!--            {{product.productName}}</span>-->
<!--&lt;!&ndash;          创作者信息&ndash;&gt;-->
<!--          <el-row class="echo-recommend-card-span-margin-top">-->
<!--&lt;!&ndash;            创作者头像&ndash;&gt;-->
<!--            <el-image :src="product.authorIcon" class="echo-recommend-card-icon"-->
<!--              />-->
<!--&lt;!&ndash;            创作者名字&ndash;&gt;-->
<!--            <span>-->
<!--              {{product.authorName}}</span>-->
<!--          </el-row>-->
<!--&lt;!&ndash;          产品众筹情况&ndash;&gt;-->
<!--          <el-row-->
<!--            class="echo-recommend-card-span-margin-top">-->
<!--&lt;!&ndash;            已众筹金额&ndash;&gt;-->
<!--            <el-col :span="12"-->
<!--              class="echo-product-amount">-->
<!--              ￥{{product.productCurrentAmount}}</el-col>-->
<!--&lt;!&ndash;            已众筹比例&ndash;&gt;-->
<!--            <el-col :span="12"-->
<!--              class="echo-product-amount">-->
<!--              {{getPercent(product.productCurrentAmount,product.productTargetAmount)}}%</el-col>-->
<!--          </el-row>-->
<!--&lt;!&ndash;          已众筹金额百分比&ndash;&gt;-->
<!--          <el-progress-->
<!--              class="echo-recommend-card-span-margin-top"-->
<!--              :percentage="getPercent(product.productCurrentAmount,product.productTargetAmount)"-->
<!--              status="success"-->
<!--          />-->
<!--&lt;!&ndash;          支持人数&ndash;&gt;-->
<!--          <span-->
<!--            class="echo-recommend-card-span-margin-top">-->
<!--            众筹支持者：{{product.productSupporters}} 人-->
<!--          </span>-->
<!--        </el-card>-->
<!--      </el-row>-->
<!--    </el-col>-->
<!--    <el-col :span="3">&nbsp;</el-col>-->
<!--  </el-row>-->
</div>
</template>

<script>
export default {
  name: "Welcome",
  created() {
    this.getCarouselImages()
    this.get24HRanking()
    this.getRecommendsProduct()
  },
  data(){
    return{
      // 走马灯
      carouselImages:[
      ],
    //  24小时金额榜
      amountsOf24H:[],
    //  24小时金额榜当前标签名
      amountsOf24HActiveName:'0',
    //  24小时收藏榜
      collectionOf24H: [],
    //  二十小时收藏榜的当前展开项的名
      collectionCollapseActiveName:1,
    //  推荐列表
      recommends:[]
    }
  },
  methods:{
  //  获取走马灯图片组
    async getCarouselImages(){
      const { data: res } = await this.$http.get('/product/carousel')
      console.log(res.data[0].images[0])
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.carouselImages = res.data
    },
  //  获取二十四小时内金额榜和收藏榜
    async get24HRanking(){
      const { data: res } = await this.$http.get('/product/24HRanking')
      console.log(res)
      if(res.meta.status!==200)return this.$message.error(res.meta.msg)
      this.amountsOf24H = res.data.amountRanking
      this.collectionOf24H = res.data.collectRanking
    },
    //  获取各类型的推荐项目
    async getRecommendsProduct(){
      const { data: res } = await this.$http.get('/product/recommends')
      console.log(res)
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.recommends = res.data
    },
    //  计算金额百分比
    getPercent(current,target){
      return parseFloat(((current/target)*100).toFixed(1));
    },
  //  跳转到商品详情
    toProductDetail(id){

      this.$router.push({path:`/productDetail`,query:{productId:id}})
    },
  //  跳转到创作者
    toAuthor(id){
      this.$router.push(`/productDetail/${id}`)
    }
  },
  computed:{

  }
}
</script>

<style scoped>
.echo-span-mixWidth{
  max-width: 16em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 30px;
  font-size: 18px;
}
/deep/ .el-collapse-item__content{
  padding: 0;
}
.echo-cursor-pointer{
  cursor: pointer;
}
.echo-recommend-row-function-span{
  margin-left: 15px;
}
.echo-recommend-row-function-span:hover{
  background-color: #9d56ae;
  cursor: pointer;
  color: white;
}
.echo-recommend-card-image{
  display: block;
  width: 100%;
}
</style>
