<template>
    <div class="registBox">
        <div class="login">
          <h2>请登录</h2>
          <span>登录该平台名称</span>
        </div>
        <div class="regist">
            <el-form label-width="80px" :model="ruleForm" ref="ruleForm" :rules='rules'>
              <el-form-item label="登录账号" prop="loginName">
                <el-input v-model="ruleForm.loginName" placeholder="邮箱或手机号码" clearable></el-input>
              </el-form-item>
              <el-form-item label="登录密码" prop="pswd">
                <el-input v-model="ruleForm.pswd" placeholder="请输入登录密码" clearable></el-input>
              </el-form-item>
              <el-form-item label="验证码" prop="verifyCode">
                <el-input v-model="ruleForm.verifyCode" placeholder="短信验证码"></el-input>
                <el-button type="text" class="send">获取验证码</el-button>
              </el-form-item>
              <br/><br/>

              <div class="submit"><el-button type="primary" @click="submitForm('ruleForm')">登 录 <i v-if="loading" class="el-icon-loading"></i></el-button></div>
              <div class="loginA flex flexbetween">
                <router-link to='/password'>忘记密码</router-link>
                <router-link to='/regist'>注册</router-link>
              </div>
            </el-form>

        </div>
    </div>
    
</template>


<script type="text/babel">
import { Toast } from 'mint-ui';

export default{
	name:'login',
  data(){
    return {
      loading:false,
	    ruleForm: {
          loginName: 'sss',
          pswd: '1234',
          verifyCode: 'ffff',
        },
        rules: {
          loginName: [
            { required: true, message: '不能为空', trigger: 'blur' },
          ],
          pswd: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ],
          verifyCode: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ]
        }
    }
  },
  mounted(){
    
  },
  methods:{
    submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {

              this.loading=!this.loading;
              this.$api.post('login',this.ruleForm,result => {
                    var that=this;
                    setTimeout(()=>{
                    that.$router.push('/index')
                    },1000)
              },err=>{
                    
                    var that=this;
                    setTimeout(()=>{
                      that.loading=!that.loading;
                      Toast(err.msg);
                    },1000)
              })
              
            } else {
                console.log('error submit!!');
                return false;
            }
          });
      },
  }
}
</script>

