<template>
    <div class="list-group" v-for="link in links" :key="link._id">
      <a :href="link.uri" target="_blank" class="list-group-item list-group-item-action">
        {{ link.title }}
        <small>{{ link.uri }}</small>
      </a>
    </div>
</template>
  
<script>
  export default {
    name: 'LinkList',
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