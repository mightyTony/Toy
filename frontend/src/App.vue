<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <img alt="failed loaded image" src="./assets/halo.png">
  <HelloWorld msg="성공한다면 이 화면이 보일거야 App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
