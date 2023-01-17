//api统一管理
import requests from "./request";
import mockRequests from './mockAjax';

//发请求
export const reqCategoryList = ()=> requests.get('/product/getBaseCategoryList');

//轮播图发请求
export const reqGetBannerList = ()=> mockRequests.get('/banner');

//获取floor数据
export const reqFloorList = ()=> mockRequests.get('/floor');

//获取搜索模块数据
export const reqGetSearchInfo = (params)=> requests({url:"/list",method:"post",data:params});

//获取产品详情
export const reqGoodsInfo = (skuId)=> requests({url:`/item/${skuId}`,method:"get"});

//加入购物车|将来修改商品个数的接口
export const reqAddOrUpdateShopCart = (skuId,skuNum)=>requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'});

//获取购物车列表数据接口
export const reqCartList = ()=> requests({url:'/cart/cartList',method:"get"});

//删除购物车产品的接口
export const reqDeleteCartById = (skuId)=> requests({url:`/cart/deleteCart/${skuId}`,method:"delete"});

//修改某一个商品的勾选的状态
export const reqUpdateCheckedByid=(skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'});