<template>
  <v-app>
    <lay-out/>
  </v-app>
</template>

<script>
import LayOut from './views/layout/app-layout.vue';

export default {
  components: {
    LayOut,
  },
  data: () => ({}),
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
