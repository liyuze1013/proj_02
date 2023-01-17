import { reqCategoryList, reqGetBannerList,reqFloorList } from "@/api";

//home模块的小仓库
const state = {
    //仓库中state的数据类型取决于服务器返回的数据类型！
    categoryList:[],
    bannerList:[],
    floorList:[]
};
const mutations = {
    CATEGORYLIST(state, categoryList){
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList){
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state, floorList){
        state.floorList = floorList;
    }

};
const actions = {
    async categoryList({commit}) {
        let result = await reqCategoryList();
        if(result.code == 200){
            commit("CATEGORYLIST",result.data)
        }
    },
    //获取首页轮播图的数据
    async getBannerList({commit}) {
        let result = await reqGetBannerList();
        if(result.code == 200) {
            commit('GETBANNERLIST',result.data);
        }
    },
    //获取floor数据
    async getFloorList({commit}){
       let result = await reqFloorList();
       if(result.code == 200) {
        commit('GETFLOORLIST',result.data);
    }
    }
};
//计算属性
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}