<template >
  <div id="header">
    <div class="content-wapper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64"  alt="">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div  class="supports" v-if="seller.supports">
          <span class="icon decrease"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="supports-count" v-if="seller.supports" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wapper" @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="bg">
        <img :src="seller.avatar" alt="" width="100%" height="100%">
    </div>
    <transition name="slide-fade"">
      <div v-show="detailShow" class="detail" >
        <div class="detail-wapper clearfix">
          <div class="detail-main">
            <h1 class="name">{{seller.name}}</h1>
            <div class="star-wapper">
              <Star :size="48" :score="seller.score"></Star>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">
                优惠信息
              </div>
              <div class="line"></div>
            </div>
            <ul v-if="seller.supports" class="supports">
              <li class="support-item" v-for="(item,index) in seller.supports">
                <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                <span class="text">{{seller.supports[index].description}}</span>
              </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">
                商家公告
              </div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              <p class="content">{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <div class="detail-close" @click="hideDetail">
          <i class="icon-close"></i>
        </div>
      </div>
    </transition>
  </div>
</template>
<script type="text/ecmascript-6">
// import axios from 'axios'
import Star from '../star/Star.vue'
export default{
  data () {
    return {
      detailShow: false
    }
  },
  props: {
    seller: {
      type: Object
    }
  },
  methods: {
    showDetail () {
      this.detailShow = true
    },
    hideDetail () {
      this.detailShow = false
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  components: {
    Star
  }
}
</script>
<style>
  #header{
    color: white;
    background: rgba(7, 17, 27, 0.5);
    position: relative;
    overflow: hidden;
  }
  .content-wapper{
    position: relative;
    padding: 24px 12px 18px 24px;
    font-size: 0;
  }
  .avatar{
    display: inline-block;
    vertical-align: top;
  }
  .avatar img{
    border-radius: 2px;
  }
  .content{
    display: inline-block;
    margin-left: 16px;
    font-size: 14px;
  }
  .content .title{
    margin: 2px 0 8px 0
  }
  .brand{
    display: inline-block;
    width: 30px;
    height: 18px;
    vertical-align: top;
    background-size: 30px 18px;
    background-repeat: no-repeat;
  }
  @media(-webkit-min-device-pixel-ratio:2),(-webkit-min-device-pixel-ratio:2)
  {
    .brand{
      background-image: url('brand@2x.png');
    }
  }
  @media(-webkit-min-device-pixel-ratio:3),(-webkit-min-device-pixel-ratio:3)
  {
    .brand{
      background-image: url('brand@3x.png');
    }
  }
  .name{
    margin-left: 6px;
    font-style: 16px;
    line-height: 18px;
    font-weight: bold;
  }
  .description{
    margin-bottom: 10px;
    line-height: 12px;
    font-size: 12px;
  }

  .supports .icon{
    display: inline-block;
    vertical-align: top;
    width: 12px;
    height:12px;
    margin-right: 4px;
    background-size: 12px 12px;
    background-repeat: no-repeat;

  }
  .icon.decrease{
    background-image: url('decrease_1@3x.png');
  }
  .icon.discount{
    background-image: url('discount_1@3x.png');
  }
  .icon.guarantee{
    background-image: url('guarantee_1@3x.png');
  }
  .icon.invoice{
    background-image: url('invoice_1@3x.png');
  }
  .icon.special{
    background-image: url('special_1@3x.png');
  }

  .support .text{
    line-height: 12px;
    font-size: 10px;
  }
  .supports-count{
    position: absolute;
    right: 12px;
    bottom: 14px;
    padding: 0 8px;
    height: 24px;
    line-height: 24px;
    border-radius: 14px;
    background: rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  .count{
    vertical-align: top;
    font-size: 10px;
  }
  .supports-count .icon-keyboard_arrow_right{
    line-height: 24px;
    margin-left: 2px;
    font-size: 10px;
  }
  .bulletin-wapper{
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: rgba(7, 17, 27, 0.2);
    z-index: 5;
    /*font-size: 0;*/
  }
  .bulletin-title{
    display: inline-block;
    vertical-align: top;
    width: 22px;
    height: 12px;
    background-size: 22px 12px;
    background-repeat: no-repeat;
    margin-top: 8px;
  }
  @media(-webkit-min-device-pixel-ratio:2),(-webkit-min-device-pixel-ratio:2)
  {
    .bulletin-title{
      background-image: url('bulletin@2x.png');
    }
  }
  @media(-webkit-min-device-pixel-ratio:3),(-webkit-min-device-pixel-ratio:3)
  {
    .bulletin-title{
      background-image: url('bulletin@3x.png');
    }
  }
  .bulletin-text{
    vertical-align: top;
    font-size: 10px;
    margin:0 4px;
  }
  .bulletin-wapper .icon-keyboard_arrow_right{
    position: absolute;
    font-size: 10px;
    right: 12px;
    top: 8px;
    z-index: 10
  }
  .bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(10px);
  }
  .detail{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: rgba(7, 17, 27, 0.8);
  }

  .detail-wapper{
    min-height: 100%;
    width: 100%;
  }
  .detail-main{
    margin-top: 64px;
    padding-bottom:  64px;
  }
  .detail-close{
    position: relative;
    width: 32px;
    height: 32px;
    margin:-64px auto 0 auto;
    clear: both;
  }
  .detail-wapper .name{
    line-height: 16px;
    font-size: 16px;
    text-align: center;
    font-weight: 700
  }
  .star-wapper{
    margin-top: 18px;
    padding: 2px 0;
    text-align: center;
  }

  .detail-main .title{
    display: flex;
    width: 80%;
    margin: 28px auto 24px auto;
  }
  .detail-main .line{
    display: flex;
    flex: 1;
    position: relative;
    top: -6;
    border-bottom: 1px solid rgba(255, 255 , 255, 0.2);
  }
  .detail-main .title .text{
    padding: 0 12px;
    font-size: 14px;
    font-weight: 700;
  }
  .detail .supports{
    width: 80%;
    margin: 0 auto;
  }
  .detail .support-item{
    padding: 0 12px;
    margin-bottom: 12px;
    font-size: 0;
  }
  .support-item .text{
    font-size: 12px;
    font-weight: 200;
    line-height: 16px;
  }
  .detail .support-item:last-child{
    margin-bottom: 0;
  }
  .detail .icon{
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: top;
    margin-right: 6px;
    background-size: 16px 16px;
    background-repeat: no-repeat;
  }
  .detail .bulletin{
    width: 80%;
    margin:0 auto;
  }
  .detail .bulletin .content{
    padding:0 12px;
    line-height: 24px;
    font-size: 12px;
  }
  /*动画*/
  .slide-fade-enter-active {
  transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(10px);
    opacity: 0;
  }


</style>
