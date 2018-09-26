<template>
    <div class="registBox">
        <div class="login">
          <h2>手机注册</h2>
          <span>注册平台名称</span>
        </div>
        <div class="regist">
            <el-form label-width="80px" :model="ruleForm" ref="ruleForm" :rules='rules'>
              <el-form-item label="手机号" prop="loginName">
                <el-input v-model="ruleForm.loginName" placeholder="请输入手机号" clearable></el-input>
              </el-form-item>
              <el-form-item label="登录密码" prop="pswd">
                <el-input v-model="ruleForm.pswd" placeholder="请输入登录密码" clearable></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="passwordChk">
                <el-input v-model="ruleForm.passwordChk" placeholder="请确认登录密码" clearable></el-input>
              </el-form-item>
              
              <el-form-item label="验证码" prop="yzm">
                <el-input v-model="ruleForm.verifyCode" placeholder="短信验证码"></el-input>
                <el-button type="text" class="send">发送</el-button>
              </el-form-item>
              <br/><br/>

              <div class="submit"><el-button type="primary" @click="submitForm('ruleForm')">注 册 <i v-if="loading" class="el-icon-loading"></i></el-button></div>
                <div class="loginA flex flexbetween">
                &nbsp;
                <!-- <router-link to='/login'>登录</router-link> -->
              </div>
            </el-form>
        </div>
    </div>
    
</template>


<script type="text/babel">
import { Toast } from 'mint-ui';
	export default{
		name:'regist',
	  data(){
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.passwordChk !== '') {
            this.$refs.ruleForm.validateField('passwordChk');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pswd) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
	    return {
        loading:false,
		    ruleForm: {
          loginName: 'sss',
          pswd: '1234',
          passwordChk: '1234',
          verifyCode: 'ffff'
        },
        rules: {
          loginName: [
            { required: true, message: '不能为空', trigger: 'blur' },
          ],
          pswd: [
            { validator: validatePass, trigger: 'blur' }
          ],
          passwordChk: [
            { validator: validatePass2, trigger: 'blur' }
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
                this.$api.post('register',this.ruleForm,result => {
                    Toast('注册成功');
                    var that=this;
                    setTimeout(()=>{
                      that.$router.push('/login')
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

