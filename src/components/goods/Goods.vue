<template >
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="val in goods" class="menu-item border1px">
          <span class="text " >
            <span v-show="val.type>0" class="icon" :class="classMap[val.type]"></span>
            {{val.name}}</span>
          </li>
      </ul>
    </div>
    <div class="foods-wrapper">

    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      goods: []
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    window.axios.get('/api/goods').then((res) => {
      this.goods = res.data.goods
    })
    console.log(this.goods)
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
</style>
