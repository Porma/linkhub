<template>

  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">LinkHub</a>
      <a href="#" class="btn btn-primary" role="button">Login</a>
    </div>
  </nav>

  <div class="container">
    <!-- <h1>LinkHub</h1> -->

    <LinkList />
  </div>
</template>

<script>
import LinkList from "./components/LinkList.vue";

export default {
  name: 'App',
  components: {
      LinkList
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
