
export default{
	data(){
		return{
			list:[]
		}
	},

	actions:{
		loadMore({state,commit},arg){
			commit('startLoading')
			commit('startLoadingMore')


			commit('appendList',data)
			commit('addPage')
		}
	},
	getters:{
		list_data(state){
			if (state.cur_page==0) {
				store.dispatch('loadOneMorePage')
			}
		}
	},
	filters:{
		mktime(t){
			let now=new Date();
			let diff=Math.floor((now-t)/1000)

			if (diff<60) {
				return '刚刚'
			}else if (diff<3600) {
				return Math.floor(diff/60)+'分钟前'
			}else if (diff<86400) {
				return Math.floor(diff/3600)+'小时前'
			}else {
				let oDate=new Date(t)
				return `${oDate.getFullYear()} -${oDate.getMonth+1}-${oDate.getDate()} `
			}
		}
	}
}

function sleep(sec){
	return new Promise((resolve,reject)=>{
		setTimeout(function(){
			resolve()
		},sec*1000)
	})
}

const store=new Vuex.Store({
	strict:true,
	state:{
		loading:false,
		article_list:[],
		cur_page:0
	},
	mutations:{
		startLoading(state){
			state.loading=true;
		},
		endLoading(state){
			state.loading=false;
		},
		appendList(state,arg){
			state.article_list=state.article_list.concat(arg)
		}
	},
	actions:{
		async loadMore({state,commit},arg){
			let data=await( await fetch(`http://localhost:8080/detail?id=${arg}`) ).json()
		}
	},
	getters:{
		article(state,arg){

		}
	}
})


export default store


export default{
	name :'abc',
	components:{
		articleDetail:import './article_detail',
		Header,
		Footer,
	},
	mounted(){
		let id=this.$route.params.id;
		this.$store.dispatch('loadDetail',id)
	},
	computed:{
		articlleDate(){
			return this.$store.state.article_data;
		}
	},
}




