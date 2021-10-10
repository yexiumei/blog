import Vue from 'vue';
import VueRouter from 'vue-router';

import home from './modules/home';
import tags from './modules/tags';
import about from './modules/about';
import videos from './modules/videos';

Vue.use(VueRouter)

// const modulesFiles = require.context('./modules', true, /\.js$/);
// console.log(modulesFiles);
// const modules = [];
// modulesFiles.keys().forEach(item => {
//   modules.push(modulesFiles(item).default);
// })
// console.log('moduls', modules);

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  ...home,
  ...tags,
  ...about,
  ...videos
]

// const routes = modules;
const router = new VueRouter({
  routes
})

export default router
