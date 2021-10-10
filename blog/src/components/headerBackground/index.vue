<template>
  <header>
    <div class="background">
      <img :src="imgSrc" width="100%" height="100%" alt="" />
    </div>
    <div class="text">
      <h1>{{title}}</h1>
      <span class="text_title">{{lottery}}</span>
    </div>
  </header>
</template> 
<script>
  export default {
    data(){
      return{
        // imgSrc:require('@/assets/image/home-bg-art.jpg'),
        // title:'YeXiuMei Blog',
        // lottery:'活到老学到老'
      }
    },
    props:{
      imgSrc:'',
      title:'',
      lottery:''
    }
  }
</script>
<style scoped>
  header{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
  }
  .background{
    width:100%;  
    height:400px; 
    z-index:-1;
    position:absolute;
    overflow: hidden;
  }
  .background img{
    /* width: 100%; */
    /* height: 100%; */
    /* background-size: 100%; */
    /* background-repeat: no-repeat; */
  }
  .text{
    width: 750px;
    height: 400px;
    display: flex;
    flex-flow: column;
    /* align-items:center; */
    justify-content: center;
  }
  .text h1{
    height: 88px;
    color: white; 
    line-height: 88px;
    font-size: 80px;
    text-align: center;
  }
  .text .text_title{
    color: white;
    font-size: 18px;
    display: block;
    font-weight: 300;
    margin-top: 10px;
  }
</style>                   