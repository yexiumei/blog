<template>
  <div class="box">
    <div class="header">
      <header-background :imgSrc='imgSrc' :title='title' :lottery='lottery'></header-background>
    </div>
    <div class="context">
      <div class="context_box">
        <div class="box_tags">
          <!-- <a class="featured_tags" v-for="item of 15">程序员</a> -->
          <a href="#程序员" class="featured_tags">程序员</a>
          <a href="#javascript" class="featured_tags">javascript</a>
          <a href="#Vue" class="featured_tags">Vue</a>
          <a href="#React" class="featured_tags">React</a>
          <a href="#Node" class="featured_tags">Node</a>
          <a href="#uniapp" class="featured_tags">uniapp</a>
          <a href="#闲谈" class="featured_tags">闲谈</a>
          <a href="#git" class="featured_tags">git</a>
          <a href="#game" class="featured_tags">game</a>
        </div>
        <div class="content">
          <div class="tag-list">
            <span id="程序员" class="tag-text">程序员</span>
            <ul>
              <li>生活的智慧</li>
              <hr>
              <li>1024程序员节日，向改变世界的程序员致敬</li>
              <hr>
              <li>程序员的你是否熟练掌握chrome开发者工具？</li>
              <hr>
            </ul>
          </div>
          <div class="tag-list">
            <span id="javascript" class="tag-text">javascript</span>
            <ul>
              <li>生活的智慧</li>
              <hr>
              <li>1024程序员节日，向改变世界的程序员致敬</li>
              <hr>
              <li>程序员的你是否熟练掌握chrome开发者工具？</li>
              <hr>
            </ul>
          </div>
          <div class="tag-list">
            <span id="Vue" class="tag-text">Vue</span>
            <ul>
              <li>生活的智慧</li>
              <hr>
              <li>1024程序员节日，向改变世界的程序员致敬</li>
              <hr>
              <li>程序员的你是否熟练掌握chrome开发者工具？</li>
              <hr>
            </ul>
          </div>
          <div class="tag-list">
            <span id="React" class="tag-text">React</span>
            <ul>
              <li>生活的智慧</li>
              <hr>
              <li>1024程序员节日，向改变世界的程序员致敬</li>
              <hr>
              <li>程序员的你是否熟练掌握chrome开发者工具？</li>
              <hr>
            </ul>
          </div>
          <div class="tag-list">
            <span id="Node" class="tag-text">Node</span>
            <ul>
              <li>生活的智慧</li>
              <hr>
              <li>1024程序员节日，向改变世界的程序员致敬</li>
              <hr>
              <li>程序员的你是否熟练掌握chrome开发者工具？</li>
              <hr>
            </ul>
          </div>
          <div class="tag-list">
            <span id="uniapp" class="tag-text">uniapp</span>
            <ul>
              <li>生活的智慧</li>
              <hr>
              <li>1024程序员节日，向改变世界的程序员致敬</li>
              <hr>
              <li>程序员的你是否熟练掌握chrome开发者工具？</li>
              <hr>
            </ul>
          </div>
          <div class="tag-list">
            <span id="闲谈" class="tag-text">闲谈</span>
            <ul>
              <li>生活的智慧</li>
              <hr>
              <li>1024程序员节日，向改变世界的程序员致敬</li>
              <hr>
              <li>程序员的你是否熟练掌握chrome开发者工具？</li>
              <hr>
            </ul>
          </div>
          <div class="tag-list">
            <span id="git" class="tag-text">git</span>
            <ul>
              <li>生活的智慧</li>
              <hr>
              <li>1024程序员节日，向改变世界的程序员致敬</li>
              <hr>
              <li>程序员的你是否熟练掌握chrome开发者工具？</li>
              <hr>
            </ul>
          </div>
          <div class="tag-list">
            <span id="game" class="tag-text">game</span>
            <ul>
              <li>生活的智慧</li>
              <hr>
              <li>1024程序员节日，向改变世界的程序员致敬</li>
              <hr>
              <li>程序员的你是否熟练掌握chrome开发者工具？</li>
              <hr>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerBackground from "@/components/headerBackground/index.vue";
export default {
  name:'tags',
  components:{headerBackground},
  data(){
    return{
      imgSrc:require('@/assets/image/tags.jpg'),
      title:'Tags',
      lottery:'Hi,this is Tags',
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
  .context{
    width: 100%;
    display: flex;
    justify-content:center;
    /* align-items:center; */
  }
  .context_box{
    margin-top: 30px;
    width: 750px;
    min-width: 750px;
    /* border: 1px solid; */
    display: flex;
    flex-direction: column;
    justify-items: center;
  }
  .box_tags{
    /* height: 70px; */
    padding:5px 5px;
    /* border: 1px solid yellow;  */
    overflow: hidden;
  }
  .featured_tags{
    background-color: #5ea0c8;
    /* border: 1px solid #a3a3a3; */
    border-radius: 20px;
    font-size: 12px;
    color: #fff;
    line-height: 14px;
    padding: 8px 10px;
    float: left;
    margin:5px 5px;
    text-decoration: none;
  }
  .content{
    /* border: 1px solid red; */
    flex: 1;
    padding: 10px;
  }
  .content .tag-list{
    margin:20px 0px;
  }
  .content .tag-text{
    color: #0085a1;
    font-weight:200;
    font-size: 20px;
  }
  .content ul li{
    list-style: none;
    padding: 10px;
  }
  .content ul li:hover{
    cursor: pointer;
    color:#0085a1 ;
  }
</style>