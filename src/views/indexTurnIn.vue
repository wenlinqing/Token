<template>
  <div style="background:#484e5e;height:100vh;">
   <div class="buyIn absc">
        <div class="buyInTop">
            <img class="absc" src="../static/images/default.png">
            <h2>ETH-Wallet</h2>
            <p>0xb8ef6bB1d3AFF380f25cD3F52b71 <i class="el-icon-menu"></i></p>
        </div>
        <div class="buyInCont">
            <p>请转入ETH</p>
            <div id="img"><img src="../static/images/ewm.jpg"></div>
        </div>
        <div class="buyInBtn flex">
            <el-button type="text" @click='visible=true'>更换资产</el-button>&nbsp;&nbsp;|
            <el-button type="text" @click='inFun'>指定金额</el-button>
        </div>
    </div>

    <el-dialog title="选择资产类型" :visible.sync="visible">
      <div class="access">
          <div class="flex accessList" v-for='(item,index) in 10' @click='chkIcon(index)'>
              <img  src="../static/images/default.png">
              <div>
                  <h2>ant</h2>
                  <p>余额:0.00 1ST</p>
              </div>
              <i class="el-icon-check" v-if='index==chkIdx'></i>
          </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: 'indexTurnIn',
  data () {
    return {
       visible: false,
       chkIdx: 0,
    }
  },
  methods:{
    inFun:function(){
        this.$prompt('', '输入金额', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /\d/,
          inputErrorMessage: '请输入金额',
        }).then(({ value }) => {
          console.log(value)
        }).catch(() => {
              
        });
    },
    chkIcon :function(idx){
        this.chkIdx=idx;
        this.visible=false;
    }
  }
}
</script>

<style>
.el-dialog{width: 100%;margin:0;position: absolute;bottom: 0;}
.el-dialog__body{padding: 0}
</style>
