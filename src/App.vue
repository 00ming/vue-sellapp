<template>
  <div id="app">
    <Header :seller="seller">
    </Header>
     <div class="tab border1px">
       <div class="tab-item">
         <router-link to="/goods">商品</router-link>
       </div>
       <div class="tab-item">
         <router-link to="/ratings">评论</router-link>
       </div>
       <div class="tab-item">
         <router-link to="/seller">商家</router-link>
       </div>
     </div>
       <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import Header from './components/header/header.vue'

export default {
  name: 'app',
  components: {
    Header
  },
  data () {
    return {
      seller: {}
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData: function () {
      var _this = this
      window.axios.get('/api/seller').then((res) => {
        // this.seller = res.data.seller
        _this.seller = res.data.seller
      }).catch((err) => {
        console.long(err)
      })
      // console.log(this.seller)
    }
  }
}
</script>

<style>
@import './common/css/icon.css';
@import './common/css/index.css';
#app .tab{
  display: flex;
  position: relative;
  width:100%;
  height: 40px;
  line-height: 40px;

}
#app .tab:after{
  position:absolute;
  left: 0;
  bottom:0;
  width:100%;
  border-bottom:  1px solid rgba(7,17,27,0.1);
  content:'';
}
#app .tab .tab-item{
  flex: 1;
  text-align: center;
}
.tab-item a{
  display: block;
  font-size: 14px;
  color: rgb(77, 85, 93);

}
.router-link-active{
  color: rgb(240,20,20)!important;
}

</style>
