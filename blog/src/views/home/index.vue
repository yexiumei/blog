<template>
  <div class="box">
    <div class="header">
      <header-background :imgSrc='imgSrc' :title='title' :lottery='lottery'></header-background>
    </div>
    <div class="context"> 
      <div class="context_left">
        <div class="context_left_item" v-for="item of 10">
          <h2>Vue深入浅出</h2>
          <div class="article">
            {{article}}
          </div>
          <p class="date">
            {{date}}
          </p>
          <hr>
        </div>
        <div class="next">
          <span>NEXT→</span>
        </div>
      </div>
      <div class="context_right">
        <!-- <hr> -->
        <!-- <div class="right_tags"> 
          <h5>FEATURED TAGS</h5>
          <div class="box_tags">
          <span class="featured_tags" v-for="item of 8">程序员</span>
          </div>
        </div>
        <hr>
        <div class="right_about">
          <h5>ABOUT ME</h5>
          <div class="box_about">
            <img :src="imgSrcAvatar" alt="">
            <p>好好学习,然后惊艳所有人!</p>
          </div>
        </div>
        <hr>
        <div class="right_friends">
            <h5>FRIENDS</h5>
            <ul>
              <li><a href="#">yexiumei的微博</a></li>
              <li><a href="#">yexiumei的bilibili</a></li>
            </ul>
        </div> -->
        <personal-info></personal-info>
      </div>
    </div>
  </div>
</template>
<script>
  import headerBackground from "@/components/headerBackground/index.vue";
  import personalInfo from "@/components/personalInfo/index.vue";
  export default {
    name:'首页',
    components:{headerBackground,personalInfo},
    data(){
      return{
        imgSrc:require('@/assets/image/home.jpg'),
        title:'YeXiuMei Blog',
        lottery:'活到老学到老',
        article:'Vue.js是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，并且非常容易学习，非常容易与其它库或已有项目整合。另一方面，Vue 完全有能力驱动采用单文件组件和Vue生态系统支持的库开发的复杂单页应用。Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。Vue.js 自身不是一个全能框架——它只聚焦于视图层。因此它非常容易学习，非常容易与其它库或已有项目整合。另一方面，在与相关工具和支持库一起使用时 [3]  ，Vue.js 也能完美地驱动复杂的单页应用。',
        date:'2020-08-10 16:39:15',
        imgSrcAvatar:require('@/assets/image/test4.jpg'),
        scrollTop:0
      }
    },
  }
</script>
<style scoped>
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
  .context{
    margin-top: 60px;
    /* border: 1px solid red; */
    width: 1200px;
    display: flex;
    justify-content: center;
  }
  .context_left{
    width: 750px;
  }
  .context_left_item{
    padding: 10px 0px;
    width: 750px;
    height: 165px;
  }
  .context_left_item h2:hover{
    cursor: pointer;
    color: #42b983;
  }
  .context_right{
    width: 220px;
    /* border: 1px solid; */
    margin-left: 50px;
  }
  .article{
    padding: 5px 5px;
    font-size: 14px;
    color: #a3a3a3;
    line-height: 22px;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
  .article:hover{
    cursor: pointer;
    color: #42b983;
  }
  .date{
    font-size: 18px;
    color: #a3a3a3;
    margin-bottom: 20px;
  }
  .next{
    width: 120px;
    height: 40px;
    border: 1px solid #a3a3a3;
    margin-top: 20px;
    float: right;
    margin-bottom: 50px;
    text-align: center;
    line-height: 40px;
    font-weight: bold;
  }
  .next:hover{
    cursor: pointer;
    background-color:  #42b983;
  }
  .right_tags h5{
    padding: 20px 0px;
    font-weight: bold;
    color: #808080;
  }
  .box_tags{
    width: 220px;
    height: 70px;
    padding:5px 5px;
    /* border: 1px solid; */
    overflow: hidden;
  }
  .featured_tags{
    border: 1px solid #a3a3a3;
    border-radius: 20px;
    font-size: 12px;
    color: #a3a3a3;
    line-height: 14px;
    padding: 5px 5px;
    float: left;
    margin:5px 5px;
  }
  .right_about{
    width: 220px;
    height: 300px;
    /* border: 1px solid; */
  }
  .right_about h5{
    padding: 20px 0px;
    font-weight: bold;
    color: #808080;
  }
  .box_about img{
    width: 80%;
    display: block;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  .box_about p{
    color: #bfbfbf;
    font-size: 14px;
  }
  .right_friends h5{
    padding: 20px 0px;
    font-weight: bold;
    color: #808080;
  }
  .right_friends ul li a{
    color: #bfbfbf;
    font-size: 14px;
  }
  ul li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }

</style>