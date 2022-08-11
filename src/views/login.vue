<template>
  <div class="login">
    <input type="text" v-model="useName" placeholder="请输入姓名">
    <button @click="loginBtn">进入聊天室</button>
  </div>
</template>
<script>
export default {
  name: 'chart',
  data(){
    return{
      useName:''
    }
  },
  methods:{
    loginBtn(){
      if(!this.useName.trim()){
        alert('请输入聊天姓名');
        return;
      }
      localStorage.setItem('useName',this.useName)
      this.$router.push({
        name:'chart'
      })
    }
  },
  created(){
  }
}
</script>
