<template>
  <div>
    <div class="indexHead flex flexbetween">
        <router-link to='/index/indexTurnCode' class="ewm"></router-link>
        <div @click='visible=true'>eth <i class="el-icon-arrow-down"></i></div>
        <router-link to='/' class="sys"></router-link>
    </div>
    <div class="indexTop">
        <div class="flex">
            <img src="../static/images/default.png">
            <div class="coinInfo">
                <h2>ETH-Wallet</h2>
                <p>0xd7519D97...9617d2bAec <i class="el-icon-menu"></i></p>
                <div>
                    <span>￥</span>
                    0.00
                </div>
            </div>
        </div>
    </div>
    <div class="list_tt flex flexbetween">资产
    <router-link to='/index/indexAdd'><i class="el-icon-circle-plus-outline"></i></router-link></div>

    <div class="indexList">
        <router-link :to="'/index/indexDetail/'+index" v-for='(item,index) in selectCoinData' :key="index">
            <div class="proBox flex flexbetween">
                <div class="img flex flexcenter"><img src="../static/images/pro.jpg"></div>
                <h2>{{item.coinName}}</h2>
                <div class="proInfo">
                    <dl>
                        <dt>{{item.price}}</dt>
                        <dd>{{'￥'+item.price*6.4}}</dd>
                    </dl>
                </div>
            </div>
        </router-link>
    </div>
    
    <!-- <el-button @click="countFn" type="primary">测试{{selectCoinData}}</el-button> -->

    <Footer></Footer>

    <IndexSelect v-if="visible" @closeSelectDiv="close"></IndexSelect>

  </div>
</template>

<script>
import Footer from '@/components/footer';
import IndexSelect from './indexSelect';

export default {
  name: 'index',
  data () {
    return {
      visible: false ,
    }
  },
  components:{
    Footer,
    IndexSelect
  },
  computed:{
    selectCoinData(){
      return this.$store.state.coinList.filter(item=>{
        return item.isOpen
      });
    }
  },
  created(){


    /*this.$api.post('/assets/list',null,result=>{
      console.log(result.data)
    })*/

    /*this.$api.post('/myWallet/mainWallet',null,result=>{
      console.log(result.data)
    })*/
  },
  methods:{
    close(){
      this.visible=false;
    },
    countFn(){
      this.$store.dispatch('add',2).then(()=>{
        console.log(this.$store.state.count)
      })
    },
  }
}
</script>

<style>
.el-dialog{width: 100%;margin:0;position: absolute;bottom: 0;}
.el-dialog__body{padding: 0}
</style>
