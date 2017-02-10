<template>
  <div id="app">
    <nav-link></nav-link>
    <router-view class="contents"></router-view>
  </div>
</template>

<style lang="scss">
  @import '../static/style.css';

  html, body {
    color: #555;
    margin: 0;
    padding: 0;
    height: 100vh;
  }
  #app {
    height: 100%;
    display: flex;
    .contents {
      height: 100%;
      flex-grow: 1;
      overflow: scroll;
      box-sizing: border-box;
    }
  }
</style>

<script>
  import NavLink from './components/NavLink'

  export default {
    name: 'app',
    components: {
      // NavLinkのみに書き換え
      NavLink
    }
  }
</script>
