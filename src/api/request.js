//对axios进行二次封装
import axios from "axios";
//引入进度条
import nprogress from "nprogress";
//引入进度条样式
import "nprogress/nprogress.css"

import store from '@/store';

const requests = axios.create({
    baseURL:"/api",
    timeout:5000,
});

//请求拦截器
requests.interceptors.request.use((config)=>{
    if(store.state.detail.uuid_token){
        config.headers.userTempId = store.state.detail.uuid_token;
    }  
    nprogress.start();
    return config;
})

//响应拦截器
requests.interceptors.response.use((res)=>{
    nprogress.done();
    return res.data;
},(error)=>{
    return Promise.reject.use(new Error('failed'))
})

//对外暴露
export default requests;