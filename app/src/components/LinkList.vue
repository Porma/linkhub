<template>
    <ul class="list-group mt-5">
      <li class="list-group-item list-group-item-action" v-for="link in links" :key="link._id">
        <!-- {{ link.title }}
        <small>{{ link.uri }}</small> -->
        <!-- <div class="d-flex w-100 justify-content-between">
          <h5 class="mt-1">{{ link.title }}</h5>
          <div class="ms-1">
            <button type="button" class="btn btn-primary ms-1"><i class="bi bi-pencil"></i></button>
            <button type="button" class="btn btn-danger ms-1"><i class="bi bi-trash"></i></button>
          </div>
        </div>
        <small class="mt-1">{{ link.uri }}</small> -->

        <div class="d-flex">

        
          <div class="d-flex position-relative flex-shrink-1 overflow-hidden text-truncate">
            <img src="../assets/logo.png" class="flex-shrink-0 me-3 align-self-center" alt="...">

            <div class="text-truncate me-4">
              <h5 class="mt-1 text-truncate">{{ link.title }}</h5>
              <small class="text-truncate overflow-hidden d-block pt-1">{{ link.uri }}</small>
              <a href="#" class="stretched-link"></a>
            </div>

            
          </div>
          <div class="align-self-center ms-auto " style="min-width: 100px">
              <button type="button" class="btn btn-primary ms-1"><i class="bi bi-pencil"></i></button>
              <button type="button" class="btn btn-danger ms-1"><i class="bi bi-trash"></i></button>
          </div>
        </div>
      </li>

      
    </ul>
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

<style>
  .list-group-item {
    border-top-width: 1px;
  }

  .list-group-item img {
    height: 75px;
    width: auto;
  }

</style>