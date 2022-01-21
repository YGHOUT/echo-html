<template>
<div style="min-width: 1080px">
<!--  总体布局行-->
  <el-row>
<!--    左白边-->
    <el-col :span="2">&nbsp;</el-col>
<!--    内容列-->
    <el-col :span="22">
<!--      走马灯行-->
      <el-row>
        <el-carousel height="540">
          <el-carousel-item v-for="(item,index) in carouselImages" :key="index">
            <img :src="item.url" alt="图片丢失" style="width: 1080px;height: 540px">
          </el-carousel-item>
        </el-carousel>
      </el-row>
<!--      整站点排名行-->
      <el-row style="margin-top: 15px">
        <!--        二十四小时金额排名-->
        <el-col :span="10" style="background-color: white;">
          <b style="font-size: 25px;color: #0F111A">二十小时金额榜</b>
          <el-tabs tab-position="left" type="border-card">
            <el-tab-pane v-for="(item,index) in amountsOf24H" :label="index+1+''" :name="index+''" :key="index">
              <el-row :gutter="10">
                <!--            商品图片-->
                <el-col :span="12">
                  <el-image class="echo-cursor-pointer" :src="item.goodsImg" style="height: 265px;width: 265px;"></el-image>
                </el-col>
                <el-col :span="12" style="color: #0F111A">
                  <!--              商品名称-->
                  <b style="font-size: 18px" class="echo-cursor-pointer">
                    {{item.goodsName}}
                  </b>
                  <!--              创作者名称-->
                  <el-row style="margin-top: 15px">
                    <el-image :src="item.authorIcon" style="height: 30px;width: 30px;margin-right: 15px;vertical-align:middle" class="echo-cursor-pointer"/>
                    <b class="echo-cursor-pointer">{{item.authorName}}</b>
                  </el-row>
                  <!--              总凑金额-->
                  <el-row style="margin-top: 10px">
                    <el-col :span="12"><b style="color: #42b983;font-size: 20px">￥ {{item.goodsCurrentAmount}}</b></el-col>
                    <el-col :span="12"><b style="color: #42b983;font-size: 20px">{{getPercent(item.goodsCurrentAmount,item.goodsTargetAmount)}}%</b></el-col>
                  </el-row>
                  <el-progress :percentage="getPercent(item.goodsCurrentAmount,item.goodsTargetAmount)" :width="70" type="circle" color="#42b983"></el-progress>
                  <el-row style="margin-top: 15px">
                    <el-col :span="12"><span style="color: #6a6b6e;font-size: 15px">支持者 {{item.goodsSupporters}}</span></el-col>
                    <el-col :span="12"><span style="color: #6a6b6e;font-size: 15px">评论 {{item.goodsComments}}</span></el-col>
                  </el-row>
                </el-col>
              </el-row>

            </el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="1">&nbsp;</el-col>
        <!--        二十四小时收藏排名-->
        <el-col :span="7" style="background-color: white">
          <span style="color: #0F111A;font-size: 25px">二十四小时收藏榜</span>
          <el-collapse v-model="collectionCollapseActiveName" accordion>
            <el-collapse-item v-for="(item,index) in collectionOf24H"
                              :key="index"
                              :name="index+1" style="padding: 0 0 0 0;">
              <template v-slot:title>
                <span class="echo-span-mixWidth">{{item.goodsName}}</span>
                <i class="el-icon-star-off" style="font-size: 18px;margin: 0 5px"></i>
                <span style="font-size: 18px">{{item.goodsCollectors}}</span>
              </template>
              <el-row>
                <el-col :span="4">
                  <el-image :src="item.goodsImg" style="height: 50px;width: 50px" class="echo-cursor-pointer"></el-image>
                </el-col>
                <el-col :span="20">
                  <span class="echo-cursor-pointer">{{item.goodsName}}</span>
                </el-col>
              </el-row>
            </el-collapse-item>
          </el-collapse>
        </el-col>
      </el-row>
    </el-col>
<!--    右白边-->
    <el-col :span="2">&nbsp;</el-col>
  </el-row>
</div>
  <div  style="min-width: 1080px">
    <!--  总体布局行-->
    <el-row>
      <!--    总体布局行，左白边列-->
      <el-col :span="3">&nbsp;</el-col>
      <!--   总体布局行，中央内容展示列-->
      <el-col :span="18">
        <!--    展示推荐商品-->
        <!--  走马灯行-->

      </el-col>
      <!--    总体布局行，右白边列-->
      <el-col :span="3">&nbsp;</el-col>
    </el-row>
    <!--      众筹排名行-->
    <el-row style="margin-top: 15px">
      <el-col :span="3">&nbsp;</el-col>
      <!--        二十四小时金额排名-->
      <el-col :span="10" style="background-color: white;">
        <b style="font-size: 25px;color: #0F111A">二十小时金额榜</b>
        <el-tabs tab-position="left" type="border-card">
          <el-tab-pane v-for="(item,index) in amountsOf24H" :label="index+1+''" :name="index+''" :key="index">
            <el-row :gutter="10">
              <!--            商品图片-->
              <el-col :span="12">
                <el-image class="echo-cursor-pointer" :src="item.goodsImg" style="height: 265px;width: 265px;"></el-image>
              </el-col>
              <el-col :span="12" style="color: #0F111A">
                <!--              商品名称-->
                <b style="font-size: 18px" class="echo-cursor-pointer">
                  {{item.goodsName}}
                </b>
                <!--              创作者名称-->
                <el-row style="margin-top: 15px">
                  <el-image :src="item.authorIcon" style="height: 30px;width: 30px;margin-right: 15px;vertical-align:middle" class="echo-cursor-pointer"/>
                  <b class="echo-cursor-pointer">{{item.authorName}}</b>
                </el-row>
                <!--              总凑金额-->
                <el-row style="margin-top: 10px">
                  <el-col :span="12"><b style="color: #42b983;font-size: 20px">￥ {{item.goodsCurrentAmount}}</b></el-col>
                  <el-col :span="12"><b style="color: #42b983;font-size: 20px">{{getPercent(item.goodsCurrentAmount,item.goodsTargetAmount)}}%</b></el-col>
                </el-row>
                <el-progress :percentage="getPercent(item.goodsCurrentAmount,item.goodsTargetAmount)" :width="70" type="circle" color="#42b983"></el-progress>
                <el-row style="margin-top: 15px">
                  <el-col :span="12"><span style="color: #6a6b6e;font-size: 15px">支持者 {{item.goodsSupporters}}</span></el-col>
                  <el-col :span="12"><span style="color: #6a6b6e;font-size: 15px">评论 {{item.goodsComments}}</span></el-col>
                </el-row>
              </el-col>
            </el-row>

          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="1">&nbsp;</el-col>
      <!--        二十四小时收藏排名-->
      <el-col :span="7" style="background-color: white">
        <span style="color: #0F111A;font-size: 25px">二十四小时收藏榜</span>
        <el-collapse v-model="collectionCollapseActiveName" accordion>
          <el-collapse-item v-for="(item,index) in collectionOf24H"
                            :key="index"
                            :name="index+1" style="padding: 0 0 0 0;">
            <template v-slot:title>
              <span class="echo-span-mixWidth">{{item.goodsName}}</span>
              <i class="el-icon-star-off" style="font-size: 18px;margin: 0 5px"></i>
              <span style="font-size: 18px">{{item.goodsCollectors}}</span>
            </template>
            <el-row>
              <el-col :span="4">
                <el-image :src="item.goodsImg" style="height: 50px;width: 50px" class="echo-cursor-pointer"></el-image>
              </el-col>
              <el-col :span="20">
                <span class="echo-cursor-pointer">{{item.goodsName}}</span>
              </el-col>
            </el-row>
          </el-collapse-item>
        </el-collapse>
      </el-col>
      <el-col :span="3">&nbsp;</el-col>
    </el-row>
    <!--  推荐项目-->
    <el-row>
      <el-col :span="3">&nbsp;</el-col>
      <el-col :span="18">
        <el-row >
          <el-col :span="22">
            在线项目
          </el-col>
          <el-col :span="2">
            更多
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="3">&nbsp;</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Welcome2"
}
</script>

<style scoped>

</style>
