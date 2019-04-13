<template>
    <div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>msg:{{msg}}</span><br>
          <span>computed:{{count}}</span><br>
          <span>$store.state.count:{{$store.state.count}}</span>
        </div>
        <el-button type="primary" @click="handleaAdd">+</el-button>
        <el-button type="primary" @click="handleReduce">-</el-button>
        <!--//lazy 不起作用-->
        <!--<el-input v-model.lazy="msg" placeholder="请输入内容"></el-input>-->


        <!-- $emit -->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>子组件</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <el-input v-model="parentInput" placeholder="我是test1的input"></el-input>
          <text-one @test='handleEvent'></text-one>
        </el-card>

      </el-card>
    </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import textOne from '@/components/page/text1One.vue'
export default {
  name: "test1",
  components:{
    textOne
  },
  data() {
    return {
      msg: "Lixing",
      parentInput: '父组件的input'
    };
  },
  computed: {
    ...mapState(["count"])
    // ...mapGetters()
  },
  methods: {
    //接受子组件传递过来的值
    handleEvent(childText){
      this.parentInput = childText;
      this.$message(this.parentInput)
    },
    handleaAdd() {
      this.$store.commit("add");
      //this代表当前vue实例
      console.log(this);
    },
    handleReduce() {
      this.$store.commit("reduce");
    }
  }
};
</script>

<style scoped>
</style>
