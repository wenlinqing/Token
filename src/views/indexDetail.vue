<template>
  <div>
    <div class="echartBox">
        <div id="myChart" style="height:250px;"></div>
    </div>
    <div class="list_tt flex flexbetween">
        <div class="filters on">全部</div>
        <div class="filters">转出</div>
        <div class="filters">转入</div>
        <div class="filters">失败</div>
    </div>

    <div class="indexList">
        
    </div>

    <div style="height:59px;"></div>
    <div class="footer flex flexbetween" style="padding:10px;">
        <router-link to='/index/indexTurnIn' style="background:#0BBED5;color:#fff;flex:1;height:40px;border-radius:5px;">
            收款
        </router-link> &nbsp;&nbsp;
        <router-link to='/index/indexTurnOut' style="background:#008DED;color:#fff;flex:1;height:40px;border-radius:5px;">
            转账
        </router-link>
    </div>


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
import * as $echarts from 'echarts';

export default {
    name: 'indexDetail',
    data () {
    return {
      visible: false,
      value1: true,
      value2: false,
    }
    },
    created(){
        console.log(this.$route.params.id)
        console.log(this.$route.params.chainName)
    },
    mounted(){
        var base = +new Date(2000, 9, 3);
        var oneDay = 24 * 3600 * 1000;
        var date = [];

        var data = [Math.random() * 300];

        for (var i = 1; i < 1000; i++) {
            var now = new Date(base += oneDay);
            date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
            data.push(Math.round((Math.random() - 0.3) * 20 + data[i - 1]));
        }

        var option = {
            tooltip: {
                trigger: 'axis',
                position: function (pt) {
                    return [pt[0], '10%'];
                }
            },
            /* toolbox: {
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                }
            }, */
            dataZoom: [{
                type: 'inside',
                start: 90,
                end: 100
            }, {
                start: 90,
                end: 100,
                //handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '50%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            }],
            grid: {
                top:'10%',
                left: '3%',
                right: '5%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: true,
                data: date
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%']
            },
            series: [{
                data: data,
                type: 'line'
            }]
        };


        var myChart = $echarts.init(document.getElementById('myChart'));
        myChart.setOption(option);

        window.onresize = function () {
            myChart.resize();
        }
    }
}
</script>

<style scoped>

</style>
