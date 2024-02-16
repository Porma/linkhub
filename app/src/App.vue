<template>

  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="#">LinkHub</a>
      <a href="#" class="btn btn-primary" role="button">Login</a>
    </div>
  </nav>

  <div class="container">
    <SearchBar />
    <LinkList />
  </div>
</template>

<script>
import LinkList from "./components/LinkList.vue";
import SearchBar from './components/SearchBar.vue';

export default {
  name: 'App',
  components: {
      LinkList,
      SearchBar
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
