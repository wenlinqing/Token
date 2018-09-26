<template>
  <div class="flex" style="flex-direction:column;height:100vh">
    <div class="indexList" style="flex:1;overflow-y:auto;">
        <div class="proBox flex flexbetween" v-for='item,index in addressList' :key='index' v-if=''>
            <div class="img flex flexcenter" :style="item.default?'border-color:#409EFF;':''">
            <i :style="item.default?'color:#409EFF;':''" style="color:#ddd;font-size:20px" class="el-icon-location"></i></div>
            <h2>{{item.name}}
                <p>{{item.phone}}</p>
                <span>{{item.address}}</span>
                <!-- <span>{{item.id}}</span> -->
            </h2>
            <div class="action flex" style="flex-direction:column;">
              <i class='el-icon-edit' style="color:#409EFF" @click="editAddress(item)"></i><br/>
              <i class='el-icon-error' style="color:#F56C6C" @click="delAddress(item.id)"></i>
            </div>
        </div>
        <div v-if='addressList.length==0' class="noDate">暂无数据</div>
    </div>
    <div class="personalBox" >
        <el-button type="primary" style="width:100%" @click='addAdr'>添加</el-button>
    </div>

    <el-dialog :title="tag=='add'?'添加地址':'修改地址'" width='90%' :visible.sync="visible">
      <div class="access">
        <el-form label-position='top' :model="ruleForm" ref="ruleForm" :rules="rules" size="medium">
          
          <el-form-item prop="name">
            <el-input v-model="ruleForm.name" placeholder="收货人姓名"></el-input>
          </el-form-item>
          <el-form-item prop="phone">
            <el-input v-model="ruleForm.phone" placeholder="收货人电话"></el-input>
          </el-form-item>
          <el-form-item prop="address">
            <el-input v-model="ruleForm.address" placeholder="收货详细地址"></el-input>
          </el-form-item>
          
          <el-form-item prop="remark">
              <el-input v-model="ruleForm.remark" placeholder="备注（选填）"></el-input>
          </el-form-item>

          <div class="flex">
            <div style="margin-right:10px;">设为默认收货地址</div>
            <el-switch
              v-model="ruleForm.default"
              active-color="#13ce66"
              inactive-color="#ddd">
            </el-switch>
          </div>

          
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelForm('ruleForm')">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex'
export default {
  name: 'myBook',
  data(){
    return {
      visible:false,
      tag:'add',
      ruleForm: {
          name: '',//张三 
          phone:'',// 15977778888
          address:'',// 深圳市坂田大道江南时代大厦1901
          remark: '',
          default:true,

      },
      rules: {
        name: [
          { required: true, message: '不能为空', trigger: 'blur' },
        ],
        phone: [
          { required: true, message: '不能为空', trigger: 'blur' },
        ],
        address: [
          { required: true, message: '不能为空', trigger: 'blur' },
        ],

      },
    }
  },

  computed:{
    ...mapState({
      addressList: state => state.addressList
    }),
  },
  methods:{
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          // console.log('this.ruleForm',this.ruleForm)
          if (valid) {
            var newObj=Object.assign({},this.ruleForm);
            if (this.tag=="add") {
              newObj.id='ID'+ new Date().getTime()
              this.$store.commit('addressFun',{obj:newObj,tag:this.tag})
            }else{
              this.$store.commit('addressFun',{obj:newObj,tag:this.tag})
            }
            this.$refs[formName].resetFields()
            this.visible = false;
          } else {
            // console.log('error submit!!');
            return false;
          }
        })
    },
    cancelForm(formName){
      this.visible = false;
      this.$refs[formName].resetFields()
    },
    addAdr(){
      this.visible=true;
      this.tag="add";
    },
    delAddress(addressBookId){
      /*if (confirm('确定删除该地址？')) {
        this.$store.commit('delAdressFun',addressBookId)
      }*/
      this.$confirm('确定删除该地址？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.commit('delAdressFun',addressBookId)
      }).catch(() => {
                
      });

    },
    editAddress(item){
      this.tag='edit';
      this.ruleForm=Object.assign({},item)
      this.visible=true;
    }

  },

}
</script>
<style scoped>
  .el-radio-group{display: block;}
  .el-radio{display: block;margin:5px 0;padding:5px 0;}
  .el-radio+.el-radio{margin-left: 0}
</style>
