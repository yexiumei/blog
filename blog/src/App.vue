<template>
  <div id="app">
    <div id="nav" v-show="scrollTop<=50">
      <div class="logo">
        <span>YeXiuMei Blog</span>
      </div>
      <div class="li">
        <router-link to="/">首页</router-link>
        <router-link to="/tags">Tags</router-link>
        <router-link to="/videos">Videos</router-link>
        <router-link to="/about">关于</router-link>
      </div>
    </div>
    <router-view/>
    <div class="footer">
      <a target="_blank" href="https://beian.miit.gov.cn/">
        <span>00000000</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      scrollTop:0
    }
  },
  mounted(){
    window.addEventListener('scroll',this.handleScroll,true)
  },
  methods:{
    handleScroll(e){      
      this.scrollTop = e.target.documentElement.scrollTop || e.target.body.scrollTop;  
    }, 
  }
}
</script>

<style>
a{
  text-decoration: none;
  color: black;
  font-weight: bold;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
}
.logo span{
  font-weight: bold;
  color:  #42b983;
}
#nav .li{
  margin-right: 20px;
}
#nav a {
  font-weight: bold;
  text-decoration: none;
  padding: 20px;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.footer{
  margin-top: 50px;
  height: 40px;
  text-align: center;
  font-size: 14px;
}
</style>
