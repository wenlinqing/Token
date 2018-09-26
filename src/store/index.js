import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex)
import {setStore,getStore,removeStore} from '@/api/utils'

const store=new Vuex.Store({
	strict: true,
	state:{
		username:'李四',
		coinList:[
			{
				"id":1,
				"icon":"pro.jpg",
				"coinName":"ETH",
				"coinText":"Ethereum",
				"adress":"0x0D8775s5d656sdf23dfs650d2887EF",
				"isDefault":true,
				"price":0,
				"isOpen":true
			},
		],
		count:0,
		userInfo:{
			username:'张三11',
			phone:'15788889999',
			cardId:'100123',
			sex:1,
		},
		addressList:JSON.parse(getStore('addressList'))||[],
	},
	actions:{
		add({state,commit},arg){
			commit('addFn',arg);
		},
		getCoinData({state,commit}){
			axios.get('http://localhost:3000/getCoin').then(result => {
		        console.log(result.data);
		        commit('getCoinData', result.data)
		    })
		},
		changeState({commit},{val,id}){
			commit('changeState',{val,id})
		}
	},
	mutations:{
		addFn(state,arg){
			state.count+=arg;
		},
		getCoinData(state,arg){
		    state.coinList=state.coinList.concat(arg);
		    // console.log('mutations',state.coinList)
		},
		changeState(state,{val,id}){
			state.coinList.filter(item=>{
				if (item.id===id) {
					item.isOpen=val
				}
			})
		},
		addressFun(state,{obj,tag}){
			
			if (obj.default) {
				for (var i = 0; i < state.addressList.length; i++) {
					state.addressList[i].default=false;
				}
			}

			if (tag=='add') {
				state.addressList.unshift(obj) // unshift 数组前添加
			}else{
				var ii=0;
				for(var index in state.addressList){
					if (state.addressList[index].id===obj.id) {
						ii=index;
						break;
					}
				}
				state.addressList.splice(ii,1,obj);
			}
			setStore('addressList',state.addressList)
		},
		delAdressFun(state,id){
			var ii=0;
			for(var index in state.addressList){
				if (state.addressList[index].id===id) {
					ii=index;
					break;
				}
			}
			state.addressList.splice(ii,1);
			setStore('addressList',state.addressList)
		}
	},
	getters:{

	}
});

export default store;