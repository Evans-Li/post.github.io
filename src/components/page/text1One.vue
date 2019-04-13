<template>
  <div id="text1_1">
    我是text1
    <el-input placeholder="请输入内容"></el-input>
    <el-button type="primary" @click="handelTest">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  name: 'textOne',
  methods:{
    handelTest(){
      this.$emit('test','我是子子组件传递过来的值!')
    },

  // mounted(){
  //   this.$on('test',(text) => {
  //     window.alert(text)
  //     console.log(1)
  //   })
  // }
  created () {
      // 监听自定义事件 test
      this.$on('test', (text) => {
        // window.alert(text);
        console.log(111)
      });
    }
  }
}
</script>

<style>

</style>
