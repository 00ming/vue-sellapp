<template >
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(val,index) in goods" class="menu-item border1px" :class="{'current':currentIndex===index}" @click="selectMenu(index,$event)">
          <span class="text" >
            <span v-show="val.type>0" class="icon" :class="classMap[val.type]"></span>
            {{val.name}}</span>
          </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="item in goods" class="food-list" ref="foodList">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item border1px">
              <div class="icon">
                <img :src="food.icon" width="57" height="57">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span><span v-show="food.oldPrice" class="old">￥{{food.oldPrice}}</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice"></shopcart>
  </div>
</template>
<script >
import BScroll from 'better-scroll'
import shopcart from '../shopcart/Shopcart.vue'
export default {
  props: {
    seller: {
      type: Object
    }
  },
  components: {
    shopcart
  },
  data () {
    return {
      goods: [],
      listHeight: [],
      scrollY: 0
    }
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i// 在区间里
        }
      }
      return 0
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    window.axios.get('/api/goods').then((res) => {
      this.goods = res.data.goods
      this.$nextTick(() => {
        this._initScroll()
        this._calculateHeight()
      })
    })
  },
  methods: {
    _initScroll () {
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      })
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
        probeType: 3,
        click: true
      })
      this.foodsScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y))
      })
    },
    _calculateHeight () {
      let foodList = this.$refs.foodList
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    selectMenu (index, event) {
      if (!event._constructed) {
        return
      }
      let foodList = this.$refs.foodList
      let el = foodList[index]
      this.foodsScroll.scrollToElement(el, 300)
    }
  }
}
</script>
<style >
@import "../../common/css/index.css";
  .goods{
    position: absolute;
    display: flex;
    width: 100%;
    top: 174px;
    bottom: 46px;
    overflow: hidden;
  }
  .menu-wrapper{
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
  }
  .foods-wrapper{
    flex: 1;
  }
  .menu-wrapper .menu-item{
    display: table;
    height: 54px;
    width: 56px;
    padding: 0 12px;
    line-height: 14px;
  }
  .menu-item.current{
    position: relative;
    z-index: 10;
    margin-top: -1px;
    background: #fff;
    font-weight: 700;
  }

  .menu-wrapper .menu-item .icon{
    display: inline-block;
    vertical-align: top;
    width: 12px;
    height:12px;
    margin-right: 4px;
    background-size: 12px 12px;
    background-repeat: no-repeat;

  }
  .menu-wrapper .menu-item .icon.decrease{
    background-image: url('decrease_3@3x.png');
  }
  .menu-wrapper .menu-item .icon.discount{
    background-image: url('discount_3@3x.png');
  }
  .menu-wrapper .menu-item .icon.guarantee{
    background-image: url('guarantee_3@3x.png');
  }
  .menu-wrapper .menu-item .icon.invoice{
    background-image: url('invoice_3@3x.png');
  }
  .menu-wrapper .menu-item .icon.special{
    background-image: url('special_3@3x.png');
  }
  .menu-wrapper .menu-item .text{
    display: table-cell;
    width:56px;
    vertical-align: middle;
    font-size: 12px;

  }
  .menu-wrapper .menu-item .text::after{
    position:absolute;
    left: 0;
    bottom:0;
    width:100%;
    border-bottom:  1px solid rgba(7,17,27,0.1);
    content:'';
  }
  .foods-wrapper .title{
    padding-left: 14px;
    height: 26px;
    line-height: 26px;
    border-left: 2px solid #d9bbe1;
    font-size: 12px;
    color: rgb(147,153,159);
    background: #f3f5f7;
  }
  .foods-wrapper .food-item{
    display: flex;
    margin: 18px;
    padding-bottom: 18px;

  }
  .foods-wrapper .food-item:after{
    position:absolute;
    left: 0;
    bottom:0;
    width:100%;
    border-bottom:  1px solid rgba(7,17,27,0.1);
    content:'';
  }
  .foods-wrapper .food-tiem:last-child{
    margin-bottom: 0;
  }
  .foods-wrapper .icon{
    flex: 0 0 57px;
    margin-right: 10px;
  }
  .foods-wrapper .content{
    flex:1;
  }
  .foods-wrapper .content .name{
    margin:2px 0 8px 0;
    height:14px;
    line-height: 14px;
    font-size: 14px;
    color: rgb(7,17,27);
  }
  .foods-wrapper .content .desc,.extra{
    line-height: 10px;
    font-size: 10px;
    color:rgb(147, 153, 159);
  }
  .foods-wrapper .content .desc{
    line-height: 12px;
    margin-bottom: 8px;
  }
  .extra .count{
    margin-right: 12px;
  }
  .foods-wrapper .price{
    font-weight: 700;
    line-height: 24px;
  }
  .foods-wrapper .price .now{
    margin-right: 8px;
    font-size: 14px;
    color:rgb(240, 20, 20);
  }
  .foods-wrapper .price .old{
    text-decoration: line-through;
    font-size: 10px;
    color: rgb(147, 153 , 159);
  }
</style>
