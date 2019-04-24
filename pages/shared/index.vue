<template>
  <section class="shared">
    <el-row :gutter="20">
      <el-col :xs="0" :sm="1" :md="1" :lg="2" :xl="5">
        <div>&nbsp;</div>
      </el-col>
      <el-col class="shared-contenr" :xs="24" :sm="22" :md="22" :lg="20" :xl="14">
        <h3>咕咕~ 咕咕~</h3>
        <h3>输入格式：随机提取码 + 你的微信名称</h3>
        <div >
          <el-input @clear="handleClear" @change="handleCheck" placeholder="请输入随机提取码~" v-model="value" clearable></el-input>
          <p class="error"> {{ error }} </p>
          <p class="encryption"> {{ encryption }} </p>
        </div>
      </el-col>
      <el-col :xs="0" :sm="1" :md="1" :lg="2" :xl="5">
        <div>&nbsp;</div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
import wxName from '@/plugins/randomPassword'
export default {
    data() {
        return {
            value: '',
            encryption: '',
            error: ''
        }
    },
    created() {
        this.encryption = Math.random().toString(36).substr(2);
    },
    methods: {
        handleCheck () {
            this.value  =  this.value.replace(/\s+/g,"");
            if (this.value.indexOf(this.encryption) != -1) {
              debugger
              wxName.map(list => {
               this.value.indexOf(list.name) != -1
               ? this.$router.push({ name: 'shared-data'})
               : this.error = '输入暗号不正确'
            })
            } else {
              this.error = '输入暗号不正确'
            }
            

            
        },
        handleClear () {
            this.error = ''
        }
    }
    
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/init';

.shared {
  .shared-contenr {
    color: font_color;

    h3 {
      text-align: center;
      margin: 10px 0;
    }
    .error {
        color: red;    
    }
    .encryption {
        color: rgba(0,0,0,0)
    }
  }
}
</style>
