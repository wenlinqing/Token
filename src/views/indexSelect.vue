<template>
  <div class="changeCoin">
    <div class="indexHead flex flexbetween" @click="selectCoin">
        <i></i>
        <div @click='visible=true' style="color:#C2C8CC;border-color:#C2C8CC;">eth <i class="el-icon-arrow-down"></i></div>
        <i></i>
    </div>
    <div class="hasCoin"><i class="el-icon-success"></i> 当前身份下的钱包</div>

    <div class="indexTop" @click="selectCoin">
        <div class="flex">
            <img src="../static/images/default.png">
            <div class="coinInfo">
                <h2>ETH-Wallet</h2>
                <p><span class="Tags">eth</span>0xd7519D97...9617d2bAec</p>
            </div>
        </div>
    </div>

    <div class="indexTop" @click="selectCoin">
        <div class="flex" style="background:#f8a619;">
            <img src="../static/images/default.png">
            <div class="coinInfo">
                <h2>ETH-Wallet</h2>
                <p><span class="Tags">eth</span>0xd7519D97...9617d2bAec</p>
            </div>
        </div>
    </div>

  </div>
</template>

<script>

export default {
  name: 'indexSelect',
  methods:{
    selectCoin(){
      this.$emit('closeSelectDiv')
    }
  },
  computed:{
    /*coinData(){
      return this.$store.state.coinList;
    }*/
  }
}
</script>
<style scoped>
  .indexHead{border-bottom: none;}

  .indexTop{margin-top: 10px;border-radius: 10px;}
  .indexTop div{border-radius: 10px;}
  .Tags{display: inline-block;border: 1px solid #fff;text-transform: uppercase;padding:0 5px;margin-right: 5px;}
</style>