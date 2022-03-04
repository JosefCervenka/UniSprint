<template>
  <div>
    <NavBar navName="UniSprint"  v-bind:buttons="[{name: 'Sprinty', link: 'Sprints'},{name:'Stories', link: 'Stories'},{name:'Týmy', link: 'Teams'}]"></NavBar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue"



export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
* {
  font-family: 'Lato', sans-serif;
}
#app {
  margin: 0;
  padding: 0;
}
</style>
