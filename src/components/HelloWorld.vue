<template>
  <v-container>
    {{ msg }}
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

   props: ['msg']
  }
</script>
