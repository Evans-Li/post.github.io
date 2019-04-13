<template>
  <div id="app">
    <!-- <div class="title_top">
      神秘的餐厅
    </div> -->
    <left-nav></left-nav>
    <div class="main">
      <router-view></router-view>
      <!--<p>{{$route.name}}&#45;&#45;{{$route.path}}</p>-->
    </div>



  </div>
</template>

<script>
import leftNav from './components/common/leftNav'
export default {
  name: 'App',
  components:{
    leftNav,

  }
}
</script>

<style>
  .title_top{
    height: 70px;
    width: 100%;
    color: #fff;
    text-align: center;
    line-height: 70px;
    font-size: 30px;
    /*background: orange;*/
    background: -webkit-linear-gradient(yellow, orange,yellow); /* Safari 5.1 - 6.0 */
    /*background: linear-gradient(red, blue); !* 标准的语法 *!*/
  }
li {
  list-style: none;
}
#app {
  font-family: 'Microsoft YaHei','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  height:100%;
  overflow: hidden;
}
.main{
  float:left;
  width:95%;

  height:100%;
  overflow: auto;
}
  /*右侧导航*/

</style>
