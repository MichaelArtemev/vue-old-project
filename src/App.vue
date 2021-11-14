<template>
  <div id="app">    
    <FixNavigationContainer/>
    <router-view/>
  </div>
</template>

<script>
  import FixNavigationContainer from '@/componentsStorage/fixNavigation/FixNavigationContainer.vue'

   export default {
    components: {
     FixNavigationContainer
    },
    data () {
      return {
        greeting: 'Hello'
      }
    }
  }
</script>

<style lang="scss">
@import './styles/core.scss';

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
body{
  font-family: 'Play', Helvetica, Arial, sans-serif;


}


</style>
