<template>
  <div class="box">
     <div class="header">
      <header-background :imgSrc='imgSrc' :title='title' :lottery='lottery'></header-background>
    </div>
  </div>
</template>

<script>
import headerBackground from "@/components/headerBackground/index.vue";
export default {
  name:'videos',
  components:{headerBackground},
  data(){
    return{
      imgSrc:require('@/assets/image/video.jpg'),
      title:'Videos',
      lottery:'Hi,this is Videos',
    }
  }
}
</script>

<style  scoped>
   .header{
    /* border: 1px solid red; */
    height: 400px;
    width: 100%;
  }
</style>