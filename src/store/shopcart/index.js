import { reqCartList, reqDeleteCartById, reqUpdateCheckedByid } from "@/api";

//home模块的小仓库
const state = {
    cartList:[]
};
const mutations = {
    GETCARTLIST(state,cartList){
        state.cartList = cartList;
    }

};
const actions = {
    //获取购物车列表数据
    async getCartList({commit}){
        let result = await reqCartList();
        if(result.code==200){
            commit('GETCARTLIST',result.data);
        }
    },
    //删除购物车某个产品
    async deleteCartListBySkuId({commit},skuId){
        let result = await reqDeleteCartById(skuId);
        if(result.code==200){
            return 'ok';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    //修改某一个商品勾选状态
    async updateCheckedById({commit}, { skuId, isChecked }) {
        let result = await reqUpdateCheckedByid(skuId, isChecked);
        if (result.code == 200) {
             return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
   },
     //删除选中的商品
     deleteAllCheckedCart({ getters, dispatch,state,commit }) {
        let PromiseAll = [];
        //获取仓库里面购物车的数据
        getters.cartList.cartInfoList.forEach(item => {
             //商品的勾选状态是勾选的,发请求一个一个删除        
                  let promise = item.isChecked==1?dispatch('deleteCartListBySkuId', item.skuId):'';
                  PromiseAll.push(promise);
             
        });
        return Promise.all(PromiseAll);
   },
   //修改全部商品的勾选的状态
   updateAllCartIsChecked({ commit, state, dispatch }, isChecked) {
    let promiseAll = [];
    //获取购物车商品的个数,进行遍历
    state.cartList[0].cartInfoList.forEach(item => {
         //调用修改某一个商品的action【四次】
         let promise = dispatch("updateCheckedById", { skuId: item.skuId, isChecked });
         promiseAll.push(promise);
    })
    //Promise.all():参数需要的是一个数组【数组里面需要promise】
    //Promise.all()执行一次,返回的是一个Promise对象,Promise对象状态：成功、失败取决于什么?
    //成功、还是失败取决于数组里面的promise状态:四个都成功、返回成功Promise、只要有一个失败、返回Promise失败状态！！！
    return Promise.all(promiseAll);
},
};

//简化数据而生
const getters = {
    cartList(state){
        return state.cartList[0] || {}
    }
    
};

export default {
    state,
    mutations,
    actions,
    getters
}