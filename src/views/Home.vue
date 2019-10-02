<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <svg-icon @click="testRequest()" icon-class="example"></svg-icon>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from '@/api/index.js'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    testRequest () {
      console.log('in')
      axios.example().then(res => {
        console.log(res)
      })
    }
  }
}
</script>
