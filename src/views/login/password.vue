<template>
    <div class="registBox">
        <div class="login">
          <h2>找回密码</h2>
          <span>8-20位字符，不可以是纯数字</span>
        </div>
        <div class="regist">
            <el-form  label-width="80px" :model="ruleForm" ref="ruleForm" :rules='rules'>
              <el-form-item label="手机号" prop="name">
                <el-input v-model="ruleForm.name" placeholder="请输入手机号" clearable></el-input>
              </el-form-item>
              <el-form-item label="验证码" prop="yzm">
                <el-input v-model="ruleForm.yzm" placeholder="短信验证码" clearable></el-input>
                <el-button type="text" class="send">发送</el-button>
              </el-form-item>
              <el-form-item label="登录密码" prop="password">
                <el-input v-model="ruleForm.password" placeholder="请输入登录密码" clearable></el-input>
              </el-form-item>
              <el-form-item label="确认密码" prop="passwordChk">
                <el-input v-model="ruleForm.passwordChk" placeholder="请确认登录密码" clearable></el-input>
              </el-form-item>
              <br/><br/>
              
              <div class="submit"><el-button type="primary" @click="submitForm('ruleForm')">重置密码</el-button></div>
                
            </el-form>
        </div>
    </div>
    
</template>


<script type="text/babel">

	export default{
		name:'password',
	  data(){
	    return {
		    ruleForm: {
	          name: '',
	          password: '',
	          yzm: ''
	        },
	        rules: {
	          name: [
	            { required: true, message: '不能为空', trigger: 'blur' },
	          ],
	          password: [
	            { required: true, message: '不能为空', trigger: 'blur' }
	          ],
	          yzm: [
	            { required: true, message: '不能为空', trigger: 'blur' }
	          ]
	        }
	    }
	  },
	  mounted(){ //doLogin

	  },
	  methods:{
	    submitForm(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {
                alert('submit!');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
        },
	  }
	}
</script>

