<template>
  <div id="shop">
    <div class="shopRouterLink">
      <router-link to="/shop" tag="li" exact>小明的店铺</router-link>
      <router-link :to="{path:'/shop2'}" tag="li">老王的的店铺</router-link>
    </div>
    <router-view class="routerShop"></router-view>
  </div>
</template>

<script>
export default {
  name: 'shop',
  components: {
    shop1: () => import('@/components/page/shop/shop1'),
    shop2: () => import('@/components/page/shop/shop2')
  }
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .shopRouterLink{
    background: darkturquoise;
  }
  .shopRouterLink li{
    float: left;
    padding: 0 20px ;
    width: 100px;
    height: 50px;
    line-height: 50px;
  }
  .shopRouterLink::after{
    content: '.';
    display: block;
    clear: both;
    height: 0;
  }
  #shop{
    width: 100%;
    height: 100%;
    text-align: center;
    /*padding-top:300px;*/
    font-size: 20px;
    margin-left: 20px;
    /*border-left: 15px solid #1D8ce0 ;*/


  }
  .shopRouterLink{
    width: 100%;
    height: auto;

  }
  .routerShop{
    /*background: blanchedalmond;*/
    width: 100%;
    height: 100%;


  }
</style>
