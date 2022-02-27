<template>
  <app-layout />
</template>

<script>
import appLayout from './views/layout/app-layout.vue';

export default {
  name: 'App',
  components: {
    appLayout,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu', sans-serif;
}
</style>
