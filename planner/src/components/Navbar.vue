<template>
  <nav class="main-nav">
    <router-link :to="{ name: 'Home' }">Projects</router-link>
    <router-link :to="{ name: 'AddProject' }">Add Project</router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
  @import "../../public/navbar.css";
</style>