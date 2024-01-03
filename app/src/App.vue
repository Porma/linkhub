<template>
  <div id="app">
    <h1>LinkHub</h1>

    <ul v-for="link in links" :key="link._id">
        <LinkItem :uri="link.uri" />
    </ul>
  </div>
</template>

<script>
import LinkItem from "./components/LinkItem.vue";

export default {
  name: 'App',
  components: {
      LinkItem
  },
  data() {
    return {
      links: []
    }
  },
  methods: {
    getLinks() {
      fetch('/api/links')
        .then(response => response.json())
        .then(data => {
          this.links = data;
          console.log(data)
        })
    }
  },
  mounted() {
    this.getLinks();
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
