<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   <h2 @click="iosRegistration">初始化+注册id</h2>
   <h2 @click="iosUnRegistration">初始化+取消注册id</h2>
   <h2 @click="iosWatchNotification">初始化+监听事件</h2>
   <textarea v-model="device_token" name="" id="" cols="30" rows="10"></textarea>
  </div>
</template>

<script>
import iosNotification from '../mixins/iosNotification'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mixins:[iosNotification],
  mounted() {
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
