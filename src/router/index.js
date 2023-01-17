import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';

Vue.use(VueRouter);

export default new VueRouter({
    routes,
    //设置滚动条的位置
    scrollBehavior() {
        //滚动行为这个函数,需要有返回值,返回值为一个对象。
        //经常可以设置滚动条x|y位置 [x|y数值的设置一般最小是零]
        return { y: 0 };
    }
})