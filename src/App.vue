<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/text">Text</router-link> |
      <router-link to="/list">List</router-link> |
      <router-link to="/event">Event</router-link> |
      <router-link to="/table">Table</router-link> |
      <router-link to="/form">Form</router-link> |
      <router-link to="/compute">Compute</router-link> |
      <router-link to="/vif">Vif</router-link> |
      <router-link to="/vbind">Vbind</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
