<template>
  <div class="regist" style="padding:15px 10px;">
        <el-form :label-position="'top'" label-width="100px" :model="ruleForm" ref="ruleForm" :rules='rules' size="mini">
          <el-form-item label="ETH" prop="num">
            <el-input placeholder="输入金额" ></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <el-input v-model="ruleForm.remark" placeholder="（选填）" ></el-input>
          </el-form-item>
          <el-form-item label="收款地址">
            <el-input placeholder="输入以太坊地址或ENS域名(以.eth" ></el-input>
          </el-form-item>
          <el-form-item label="付款地址">
            <div style="padding-left:15px;">0xb8ef6bB256416dddd445454851818181815151d</div>
          </el-form-item>
          <el-form-item label="矿工费用">
            <div style="padding-left:15px;color:#0062AD">0.0001 ether ≈ ¥0.33</div>
          </el-form-item>
          <br/><br/>

          <div class="submit">
            <el-button type="primary" @click="submitForm('ruleForm')">转账</el-button>
          </div>
            
        </el-form>
    </div>
</template>

<script>

export default {
  name: 'indexDetail',
  data () {
    return {
      ruleForm: {
          num: '',
        },
        rules: {
          num: [
            { required: true, message: '不能为空', trigger: 'blur' }
          ]
        }
    }
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
