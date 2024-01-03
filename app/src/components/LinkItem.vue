<template>
  <li>
    {{ uri }}
  </li>
</template>

<script>
  export default {
    name: 'LinkItem',
    props: {
      uri: String
    }
  }
</script>