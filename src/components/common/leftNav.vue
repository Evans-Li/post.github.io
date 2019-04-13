<template>

  <div class="left-nav">
    <ul>
      <router-link to="/pos" tag="li" exact>
        <li>
          <i class="icon iconfont icon-goumai"></i>
          <div>点餐11c1f1</div>
      </li>
      </router-link>

      <router-link to="/shop" tag="li">
        <li>
          <i class="icon iconfont icon-dianpu "></i>
          <div>店铺</div>
      </li>
      </router-link>

      <router-link to="/good" tag="li">
        <li>
          <i class="icon iconfont icon-hanbao"></i>
          <div>商品</div>
        </li>
      </router-link>
      <router-link to="/member" tag="li">
        <li>
          <i class="icon iconfont icon-huiyuanqia"></i>
          <div>会员</div>
        </li>
      </router-link>
      <router-link to="/statistics" tag="li">
        <li>
          <i class="icon iconfont icon-zuanshi "></i>
          <div>统计</div>
        </li>
      </router-link>
      <router-link to="/setting" tag="li">
        <li>
          <i class="icon iconfont icon-set "></i>
          <div>设置</div>
        </li>
      </router-link>
      <router-link tag="li" to="/test1">
        <i class="icon iconfont icon-ziyuan"></i>
        <div>测试1</div>
      </router-link>

    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .left-nav{
       color:#fff;
       font-size:10px;
       height:100%;
       background-color: #1D8ce0;
       float:left;
       width:5%;
    }
    .iconfont{
       font-size:24px;
    }
    .left-nav ul{
        padding:0px;
        margin: 0px;
    }
    .left-nav li{
        list-style: none;
        text-align: center;
        border-bottom:1px solid #20a0ff;
        padding:10px;
    }
    .left-nav li li{
      border-bottom: none;
      cursor: pointer;
    }
  .activeclass{
    background: blue;
    color: #fff;
  }
</style>
