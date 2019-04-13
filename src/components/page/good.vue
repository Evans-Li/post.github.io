<template>
  <div class="good_banner">
    <!--<span class="demonstration">默认 Hover 指示器触发</span>-->
    <el-carousel height="950px">
      <el-carousel-item v-for="item in imgList" :key="item">
        <div class="imgDiv">
          <img :src="item" alt="" style="width: 100%;height: 100%;">
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
  export default {
    name: 'good',
    data(){
      return{
        imgList: [
          require('../../assets/img/banner/3.jpg'),
          require('../../assets/img/banner/1.jpg'),
          require('../../assets/img/banner/5.jpg'),
          require('../../assets/img/banner/2.jpg'),
          require('../../assets/img/banner/4.jpg'),
        ]
      }
    }
  }

</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }


  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .good_banner img{
    width: 100px;
    height: 500px;
    position: absolute;
    left: 50%;
    margin-left:  -50%;

    /*padding: 100px;*/
    /*margin:0 70px 0 70px;*/
    /*border: 70px solid #ccc;*/
  }
  .good_banner{
    position: relative;
  }
  .imgDiv{
    text-align: center;
    width: 1000px;
    height: 500px;
    background: #fff;

  }
</style>
