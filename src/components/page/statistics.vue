<template>
  <div id="statistics">
    <p id="p1">ppppp</p>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-button type="primary" icon="el-icon-edit" @click="handleClick"></el-button>
    <el-button type="primary" icon="el-icon-edit" @click="handleClear"></el-button>
    <hr>

    <!-- watch监听测试 -->
    <el-card class="box-card" style="width: 500px;" shadow="hover">
    <div slot="header" class="clearfix">
      <span>watch 监听</span>
      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
    </div>
      <p>FullName:
        <el-input style="width: 300px;margin-left: 20px;"
          size="small"
          readonly="true"
          v-model="fullName"
          disabled
        ></el-input>
      </p>
      <p style="margin-top: 20px">FirstName:<el-input v-model="firstName"
        size="small"
        style="width: 300px;margin-left: 20px"
       clearable></el-input></p>
      <!--  -->
  <div v-for="item,o in 4" :key="o">
   {{o}} {{item}}
  </div>
</el-card>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'statistics',
  data(){
    return{
      flag: false,
      msg: 'hello',
      input: '',
      //watch 测试
      firstName: 'Li',
      lastName: 'Xing',
      fullName: ''
    }
  },
  /*
    深度监控
  */
  watch:{
    firstName(newName,oldName){
      // this.fullName = newName + '' + this.lastName;
      this.fullName = this.firstName != '' ?  newName + '' + this.lastName : ' ';
    }
  },
  methods:{
    //jquery改变input的值
    handleClick(){
      let text = $('#p1').text();
      this.input = text;
    },
    //清空jquery改变的input后的值
    handleClear(){
      this.input = ' '
    },
  },
  //挂载后
  mounted:function(){
    let test = $('#p1').text();
    console.log(test);
  },
  beforeRouteEnter(to,from,next){
    console.log('准备进入路由!');
    console.log(this)
    next();
    console.log(this)
    console.log('进入路由成功!')
  },
  beforeRouteLeave(to,from,next){
    console.log('准备离开路由!');
    console.log(this)
    if(!this.flag){
     next();
    }
    console.log(this);
    console.log(this.$route.matched);
    console.log('离开路由成功!');
  }
}
</script>

<style>
  #statistics{
    width: 100%;
    height: 100%;
    /* text-align: center; */
  }
  *{
    margin: 0;
    padding: 0;
  }

</style>
