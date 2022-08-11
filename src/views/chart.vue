<template>
  <div class="chart">
    <ul>
      <li v-for="item in msgList" :key="item.id">
        <p><span>{{item.name}}</span><i>{{item.date}}</i></p>
        <p>{{item.msgInfo}}</p>
      </li>
    </ul>
    <input type="text" v-model.trim="msg" placeholder="请输入聊天信息">
    <button @click="sendBtn">发送</button>
  </div>
</template>

<script>
import { useWebsocket } from '../utils/websocket'
export default {
  name: 'chart',
  data() {
    return {
      useName: '',
      msg: '',
      msgList: [],
      ws:null
    }
  },
  methods: {
    init() {
      this.ws = useWebsocket(this.handleMessage);
    },
    handleMessage(e) {
      this.msgList.push(JSON.parse(e.data))
      this.msg = '';
    },
    sendBtn() {
      if (!this.msg) {
        return;
      }
      let params = {
        id: Math.floor(Math.random() * 1000 + 1),
        name: this.useName,
        date: new Date(),
        msgInfo: this.msg
      }
      this.ws.send(JSON.stringify(params))
    }
  },
  created() {
    this.useName = localStorage.getItem('useName') || '';
    if (!this.useName) {
      this.$router.push({
        path: 'login'
      })
    } else {
      this.init();
    }
  }
}
</script>
<style scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
