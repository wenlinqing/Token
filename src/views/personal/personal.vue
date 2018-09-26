<template>
  <div>
    <div class="personalBox">
        <div class="personTop">
            <div class="personInfo">
                <img src="../../static/images/default.png">
                <p>{{userInfo.username}} <i class="el-icon-edit" style="font-size:20px;"></i></p>
            </div>
            <div class="personData flex">
                <div>
                    <span>身份ID</span>im1e4sdjfsljfwefjaod<br/>fjafafawofsdfja
                </div>
                <div>
                    <span>手机号码</span>{{userInfo.phone}}
                </div>
            </div>
            <div class="perEye">退出登录</div>
        </div>
        <div class="personNav">
            <router-link to='/personal/myBook'><span class="per_nav01"></span>我的地址本</router-link>
            <router-link to='/personal/protocol'><span class="per_nav03"></span>用户协议</router-link>
            <router-link to='/personal/help'><span class="per_nav06"></span>帮助中心</router-link>
            <router-link to='/personal/aboutus'><span class="per_nav05"></span>关于我们</router-link>
        </div>
    </div>

    <Footer></Footer>

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
import Footer from '@/components/footer';
import {mapState} from 'vuex';
export default {
  name: 'personal',
  data () {
    return {
      visible: false,
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
  components:{
    Footer
  },
  computed:{
    /*...mapState({
      userInfo: state => state.userInfo
    })*/
    userInfo(){
      return this.$store.state.userInfo
    }
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
  }
}
</script>

<style>

</style>
