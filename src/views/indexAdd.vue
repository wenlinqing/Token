<template>
  <div>
    <br/>
    <div class="indexTop flex">
        <el-input placeholder="输入Token名称或合约地址" prefix-icon="el-icon-search" size="small"></el-input>&nbsp;&nbsp;
        <el-button type="text" size="small" @click='visible=true'>管理</el-button>
    </div>
    <div class="list_tt flex flexbetween">我的资产 </div>

    <div class="indexList">
        <div class="proBox flex flexbetween" v-for='item,index in coinData' :key='index'>
            <div class="img flex flexcenter"><img src="../static/images/pro.jpg"></div>
            <h2>{{item.coinName}}
                <p>{{item.coinText}}</p>
                <span>{{item.adress}}</span>
            </h2>
            <div class="proInfo" v-if='!item.isDefault'>
                <el-switch v-model="item.isOpen" @change="switchChange($event,item.id)"></el-switch>
            </div>

        </div>
    </div>
    <Footer></Footer>

    <el-dialog title="选择资产类型" :visible.sync="visible">
      <div class="access">
          <div class="flex accessList" v-for='(item,index) in 10' :key="index">
              <img src="../static/images/default.png">
              <div>
                  <h2>ETH-Wallet</h2>
                  <p>0xb8ef6bB1...5cD3F52b71</p>
              </div>
              <!-- <i class="el-icon-check" v-if='index==chkIdx'></i> -->
          </div>
          <div style="height:59px;"></div>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import Footer from '@/components/footer';

export default {
  name: 'indexAdd',
  data () {
    return {
      visible: false,
      value:false,
    }
  },
  components:{
    Footer
  },
  computed:{
    coinData(){
      return this.$store.state.coinList;
    }
  },
  created(){
    if (this.$store.state.coinList.length==1) {
      this.$store.dispatch('getCoinData');
    }
  },
  methods:{
    switchChange(val,id){
      this.$store.dispatch('changeState',{val,id});
    }
  }
}
</script>

<style>
.el-dialog{width: 100%!important;margin:0!important;position: absolute!important;bottom: 0!important;}
.el-dialog__body{padding: 0!important}
</style>
