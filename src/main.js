import Vue from 'vue'
import App from './App.vue'
//三级联动组件--全局组件
import TypeNav from '@/components/TypeNav';
Vue.component(TypeNav.name,TypeNav)

import Carousel from '@/components/Carousel';
Vue.component(Carousel.name,Carousel)

import Pagination from '@/components/Pagination';
Vue.component(Pagination.name,Pagination)

//注册路由
import router from '@/router';

//引入仓库
import store from '@/store';

//引入MockServe.js
import '@/mock/mockServe';

//Vue.config.productionTip = false

//引入swiper样式
import 'swiper/css/swiper.css';

new Vue({
  render: h => h(App),
  //配置全局事件总线$bus
  beforeCreate(){
    Vue.prototype.$bus = this;
  },

  router,
  //注册仓库
  store
}).$mount('#app')
