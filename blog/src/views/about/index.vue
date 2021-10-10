<template>
  <div class="box">
    <div class="header">
      <header-background :imgSrc='imgSrc' :title='title' :lottery='lottery'></header-background>
    </div>
    <div class="context"> 
      <div class="context_left">
        <div class="option">
          <select name="" v-model="valueSelected" @change="checkField">
            <option :value="0" >中文 Chinese</option>
            <option :value="1" >英文 English</option>
          </select>
        </div>
        <h3>关于我</h3>
        <p>我是叶秀梅，本人性格乐观开朗,善于沟通交流。</p>
        <h3>专业技术领域</h3>
        <p>能够熟练运用CSS3，LESS语法，HTML5基础操作，学习了bootstrap响应式框架</p>
        <p>了解和掌握vue框架项目搭建vuex、vue-router、vue-cli 的使用方法</p>
        <p>熟悉jQuery+Ajax交互，element-ui库的基本使用</p>
        <p>Github：https://github.com/yexiumei/backstage</p>
        <p>邮箱：2093770449@qq.com</p>
        <img :src="imgSrc_qr_code" alt="" style="border:1px solid #F58800;margin-top:20px">
      </div>
      <div class="context_right">
        <personal-info></personal-info>
      </div>
    </div>
  </div>
</template>

<script>
import personalInfo from "@/components/personalInfo/index.vue";
import headerBackground from "@/components/headerBackground/index.vue";
export default {
  name:'about',
  components:{headerBackground,personalInfo},
  data(){
    return{
      imgSrc:require('@/assets/image/about.jpg'),
      title:'About',
      lottery:'Hi,this is HeYuHang',
      valueSelected:'0',
      imgSrc_qr_code:require('@/assets/image/QRcode.jpg')
    }
  },
  methods:{
    checkField(){
      console.log(this.valueSelected);
    }
  }
}
</script>

<style  scoped>
.box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .header{
    /* border: 1px solid red; */
    height: 400px;
    width: 100%;
  }
   .header{
    /* border: 1px solid red; */
    height: 400px;
    width: 100%;
  }
  .context{
    margin-top: 60px;
    /* border: 1px solid red; */
    width: 1200px;
    display: flex;
    justify-content: center;
  }
  .context_left{
    width: 750px;
    /* border: 1px solid; */
  }
  .context_left h3{
    padding:5px 10px;
  }
  .context_left p{
    padding:5px 10px;
  }
  .context_right{
    width: 220px;
    /* border: 1px solid; */
    margin-left: 50px;
  }
  .option{
  /*用div的样式代替select的样式*/
    margin: 10px;
    width: 120px;
    height: 30px;
    border-radius: 5px;
    box-shadow: 0 0 5px #ccc;  
    /* border: 1px solid #cccccc; */
    position: relative;
  }
  .option select{
    border: none;
    outline: none;
    width: 100%;
    height: 30px;
    line-height: 30px;
    /* appearance: none; */
    /* -webkit-appearance: none; */
    /* -moz-appearance: none; */
    /* padding-left : 20px; */
    padding: 5px;
  }
  .option:after{
    content: "";
    width: 14px;
    height: 8px;
    /* background: url(../assets/arrow-down.png) no-repeat center; */
    position: absolute;
    right: 20px;
    top: 41%;
    /*给自定义的图标实现点击下来功能*/
    pointer-events: none;
  }
</style>