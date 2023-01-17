import { reqGoodsInfo,reqAddOrUpdateShopCart } from "@/api";
import {getUUID} from '@/utils/uuid_token';

//home模块的小仓库
const state = {
    goodInfo:{},
    uuid_token:getUUID()
};
const mutations = {
    GETGOODINFO(state, goodInfo){
        state.goodInfo = goodInfo;
    }

};
const actions = {
   //获取产品信息
   async getGoodInfo({commit},skuId){
       let result =  await reqGoodsInfo(skuId);
       if(result.code==200){
        commit('GETGOODINFO',result.data);
       }
    },
        //加入购物车|将来修改商品个数的地方,右侧是载荷对象【两个K,两个V】
    async addOrUpdateShopCart({ commit,}, { skuId, skuNum }) {
        //底下即为：加入购物车(修改商品个数)的请求,参数顺序不能瞎写
        let result = await reqAddOrUpdateShopCart(skuId, skuNum);
        
         if (result.code == 200) {
              //如果加入购物车成功,返回promise即为成功
              return "ok";
         } else {
              //如果加入购物车失败，返回失败的Promise
              return Promise.reject(new Error("faile"));
         }
        //思考问题:目的是前端把商品的ID、商品个数传递给服务器【人家服务器，兄弟我收到了,没有额外的给你传递其余的数据】
        //想的问题:豪哥不对，咱们以前经常commit条件mutation存储数据【没有返回数据，没有数据可存储】,没有需要提交mutation让仓库
        //存储数据
        //第一种解决方案code,完全可以！！！！
   }
   }

//简化数据而生
const getters = {
    categoryView(state){
        return state.goodInfo.categoryView || {};
    },
    skuInfo(state){
        return state.goodInfo.skuInfo || {};
    },
    spuSaleAttrList(state){
        return state.goodInfo.spuSaleAttrList || [];
    }
    
};

export default {
    state,
    mutations,
    actions,
    getters
}