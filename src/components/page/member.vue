<template>
  <div id="member">
    <router-view style="width: 100%;height: 200px;background: #000;"></router-view>
    <router-view name="left" style="float: left;width: 100px;background-color: gold;height: 399px;"></router-view>
    <router-view name="right" style="float: left;width: 50%;background-color: #8c939d;height: 399px;"></router-view>
  </div>
</template>

<script>
export default {
  name:'member',
  component:{
    vipLeft: () => import('@/components/page/vip/vipLeft.vue'),
    vipLeft: () => import('@/components/page/vip/vipLeft.vue')
  }
}
</script>

<style>
#member{
    /*width: 100%;*/
    /*height: 100%;*/
  }

</style>
