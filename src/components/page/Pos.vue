<template>
      <div class="pos">
        <el-row id="order-list" class="pos-order" >
            <el-col :span='8' class="col-8">
              <el-tabs>
                <el-tab-pane label="点餐">
                  <el-table :data="tableData" border style="width:100%">
                    <el-table-column prop="goodsName" label="商品"></el-table-column>
                    <el-table-column prop="count" label="数量" width="70"></el-table-column>
                    <el-table-column prop="price" label="金额" width="70"></el-table-column>
                    <el-table-column label="操作" width="100" fixed="right">
                      <template scope="scope">
                        <el-button type="text" size="small" @click="deleteSingleList(scope.row)">删除</el-button>
                        <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                  <div class="totalDiv">

                    数量：<em>{{totalCount}}</em>&nbsp<span></span>总价:<b>￥{{totalMoney}}</b>
                  </div>
                  <div class="btn">
                    <el-button type="warning" style="width:100px"  @click="entryOrders">挂单</el-button>
                    <el-button type="danger" style="width:100px" @click="deleteAllGoods" >删除</el-button>
                    <el-button type="success" style="width:100px" @click="checkOut">结账</el-button>
                  </div>

                </el-tab-pane>

                <el-tab-pane label="挂单">挂单</el-tab-pane>
                <el-tab-pane label="外卖">外卖


                </el-tab-pane>

              </el-tabs>
            </el-col>


            <!--商品展示-->
            <el-col :span="16" class="col-16">
              <div class="often-goods">
                <div class="title">常用商品 </div>
                <div class="often-goods-list">
                  <ul>
                    <li v-for="item,index in oftenGoods" :key="index+Math.random()" @click="addOrderList(item)" >    <!-- 添加 -->
                      <span>{{item.goodsName}}</span>
                      <span class="o-price">￥{{item.price}}元</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="goods-type typeDiv">
                <el-tabs>
                    <el-tab-pane label="汉堡">
                      <div>
                        <ul class='cookList'>
                            <li v-for="item,index in type0Goods" :key="index+Math.random()" @click="addOrderList(item)" >
                                <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                                <span class="foodName">{{item.goodsName}}</span>
                                <span class="foodPrice">￥{{item.price}}元</span>
                            </li>
                        </ul>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="小食">
                        <div>
                        <ul class='cookList'>
                            <li v-for="item,index in type1Goods" :key="index+Math.random()"  @click="addOrderList(item)">
                                <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                                <span class="foodName">{{item.goodsName}}</span>
                                <span class="foodPrice">￥{{item.price}}元</span>
                            </li>
                        </ul>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="饮料">
                        <div>
                        <ul class='cookList'>
                            <li v-for="item,index in type2Goods" :key="index+Math.random()"  @click="addOrderList(item)">
                                <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                                <span class="foodName">{{item.goodsName}}</span>
                                <span class="foodPrice">￥{{item.price}}元</span>
                            </li>
                        </ul>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="套餐">
                        <div>
                        <ul class='cookList'>
                            <li v-for="item,index in type3Goods" :key="index+Math.random()"  @click="addOrderList(item)">
                                <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                                <span class="foodName">{{item.goodsName}}</span>
                                <span class="foodPrice">￥{{item.price}}元</span>
                            </li>
                        </ul>
                      </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
            </el-col>

        </el-row>
    </div>

</template>

<script>
// import axios from 'axios'
import axios from 'axios'
export default {

  data(){
    return{
      tableData:[],
      oftenGoods:[],
      type0Goods:[],
      type1Goods:[],
      type2Goods:[],
      type3Goods:[],
      totalMoney:0,
      totalCount:0
    }
  },
  mounted:function(){
    var orderHeight = document.body.clientHeight;
    console.log("orderHeight"+orderHeight);
    document.getElementById('order-list').style.height = orderHeight +'px';

  },
  created(){
    axios.get('https://www.easy-mock.com/mock/5b9a08d5c51e135cce319777/example/PosGoods').then(response =>{
      console.log(response.data.data);
      this.oftenGoods = response.data.data;
    }).catch(error =>{
      this.$message.error("网络错误！数据请求失败！");
    });
    axios.get('https://www.easy-mock.com/mock/5b9a08d5c51e135cce319777/example/PosType').then(response =>{
      console.log(response.data.data);
      this.type0Goods = response.data.data[0];
      this.type1Goods = response.data.data[1];
      this.type2Goods = response.data.data[2];
      this.type3Goods = response.data.data[3]
    }).catch(error =>{
      this.$message.error("网络错误！数据请求失败！");
    })

  },
  methods:{
    addOrderList(goods){
      this.totalMoney = 0;
      this.totalCount = 0;
      let isHave = false;
      //判断列表中是否已经添加该商品
      for(let i=0;i<this.tableData.length;i++){
        if(this.tableData[i].goodsId == goods.goodsId){
          isHave = true;
        }
      }
      //如果存在，改商品数量加 1
      if(isHave){
        let arr = this.tableData.filter(o => o.goodsId == goods.goodsId);
        arr[0].count++;
      }else{
        let newGoods = {goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1}
        this.tableData.push(newGoods);
      }
      this.tableData.forEach((element) =>{
        this.totalCount += element.count;
        this.totalMoney = this.totalMoney+(element.price * element.count);
      })
    },
    //获取总价
    getAllMoney(){
      this.totalMoney = 0;
      this.totalCount = 0;
      if(this.tableData){
        this.tableData.forEach(element =>{
          this.totalCount += element.count;
          this.totalMoney = this.totalMoney+(element.price * element.count);
        })
      }
    },
    //删除单个商品
    deleteSingleList(goods){
      this.$confirm("确定要删除该商品吗？","温馨提示",{
        confirmButtonTest:"确定",
        cancelButtonTest:"取消",
        type:"warning"
      }).then(() =>{
        this.tableData = this.tableData.filter( o => o.goodsId != goods.goodsId);
        this.getAllMoney();
        this.$message({
          type:"success",
          message:"商品删除成功！"
        })
      }).catch(() =>{
        this.$message({
          type:"info",
          message:"取消删除"
        })
      })

    },
    //删除全部商品
    deleteAllGoods(){
      if(this.tableData.length !=0){
        this.$confirm("确定要删除所有商品吗？","温馨提示",{
        confirmButtonTest:"确定",
        cancelButtonTest:"取消",
        type:"error"
      }).then(() =>{
        this.tableData =[];
        this.totalMoney = 0;
        this.totalCount = 0;
        this.$message({
          type:"success",
          message:"商品已删除^_^"
        });
      }).catch(() =>{
        this.$message({
          type:"info",
          message:"取消删除"
        })
      })
      }else{
        this.$message({
          type:"info",
          message:"您还没有添加任何商品！^_^"
        })
      }

    },
    //结账
    checkOut(){
      if(this.tableData.length != 0){
        this.tableData = [];
        this.totalMoney = 0;
        this.totalCount = 0;
        this.$message({
          type:"success",
          message:"结账成功！感谢您对小店的支持！"
        })
      }else{
        this.$message({
          type:"error",
          message:"不能空结^_^，老板理解你急切的心情！"
        })
      }
    },
    //挂单
    entryOrders(){
      if(this.tableData.length !=0){
        this.$message({
          type:"warning",
          message:"挂单成功！^_^"
        })
      }else{
        this.$message({
          type:"warning",
          message:"亲！您还没有选吃的呢！^_^"
        })
      }
    }
  }



}

</script>

<style scoped>
.often-goods-list ul li{
      list-style: none;
      float:left;
      border:1px solid #E5E9F2;
      padding:10px;
      margin:5px;
      background-color:#fff;
   }
  .o-price{
      color:#58B7FF;
   }
.title{

       height: 20px;
       /* border-bottom:2px solid blue; */
       /* background-color: #F9FAFC; */
       background-color:#1D8ce0;
       color: #fff;
       padding:10px;
       font-size: 13px;
       /* margin-left: 10px */

}
.pos-order{
  border-right: 1px solid #ccc;
  background:  #F9FAFC;
  height: 100%;
}
  .pos{
    padding-left: 20px;
  }
  .btn{
    margin-top: 15px;
    text-align: center
  }
  .goods-type{
    clear: both;
  }

  /* //type0 */

  .cookList li{
       list-style: none;
       width:23%;
       border:1px solid #E5E9F2;
       height: auto;
       overflow: hidden;
       background-color:#fff;
       padding: 2px;
       float:left;
       margin: 2px;
   }
   .cookList li span{
        display: block;
        float:left;
   }
   .foodImg{
       width: 40%;
   }
   .foodName{
       font-size: 18px;
       padding-left: 10px;
       color:brown;
   }
   .foodPrice{
       font-size: 16px;
       padding-left: 10px;
       padding-top:10px;
   }
   .totalDiv{
     padding: 10px;
     /* border: 1px solid blue; */
     background-color: #fff;
     text-align: center;
     font-size: 16px;
   }
   .totalDiv em{
     color: blue;
     font-size: 13px;
   }
   .totalDiv b{
     color: orange;
     padding-left: 10px

   }
   .totalDiv span{
     width: 20px;
     height: 1px;
     display: inline-block
   }
   .col-16 li{
     cursor: pointer;
     padding-left: 10px;
   }
   .col-8{
     border-right: 2px solid #ccc;
     height: 100%;
     background: rgb(245, 244, 244);
   }
   .typeDiv{
     padding-left: 10px;
    /* border-bottom: 2px solid blue; */
    /* background: #58B7FF */

   }
  .el-tabs__nav-wrap is-top{
    background: #000;
  }
</style>
