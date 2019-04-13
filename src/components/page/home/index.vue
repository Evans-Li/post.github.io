<template>
    <div class="home">
      <div class="home_title">
        <h2>欢迎光临</h2>
      </div>
      <div id="box"></div>
      <div class="bg">
        <!--<img src="../../../assets/bg.jpg" alt="">-->
      </div>
      <!--<img src="../../../assets/bg.jpg" alt="">-->
    </div>
</template>

<script>
    export default {
        name: "index",
      methods:{
          startB(){
            let oStyle = document.getElementById('style');
            let oBox = document.getElementById('box');
            let timer = setTimeout(function(){
              oBox.style.cssText += 'margin-top:50px;';
              setTimeout(function(){
                oBox.style.cssText += 'border-style:solid;border-color:#000;';
                setTimeout(function(){
                  oBox.style.cssText += 'border-radius:50%;';
                  setTimeout(function(){
                    oStyle.innerHTML += '#box:before{background:#000;border:70px solid #fff;}';
                    setTimeout(function(){
                      oStyle.innerHTML += '#box:before{border-radius:50%;}';
                      setTimeout(function(){
                        oStyle.innerHTML += '#box:after{background:#fff;border:70px solid #000;}';
                        setTimeout(function(){
                          oStyle.innerHTML += '#box:after{border-radius:50%;}';
                          setTimeout(function(){
                            oStyle.innerHTML += '#box{animation: autoplay 2s infinite linear;}@keyframes autoplay{ form{ transform: rotate(0deg) } to{ transform: rotate(360deg) } }';
                          },500);
                        },500);
                      },500);
                    },500);
                  },1000);
                },1000);
              },1000);
            },1000);

          }
      },
      mounted(){
          this.startB()
      },
      // created(){
      //     this.startB()
      // }

    }
</script>

<style id="style">
  #box{ position: relative;  width: 310px; height: 160px; margin: -160px auto 0; background: #fff; border-width: 150px 0 0 0;transition: .7s; }
  #box:before{ content: ""; position: absolute; top: -75px; left: 0; width: 15px; height: 15px; transition: .7s; }
  #box:after{ content: ""; position: absolute; top: -75px; right: 0; width: 15px; height: 15px; transition: .7s; }

  .home{
    /*background-image: url('../../../assets/bg.jpg');*/
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .bg{
    margin-top: 100px;
  }
  .home_title{
    padding-top: 50px;
  }
</style>
