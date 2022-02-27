<template>
  <div class="product-list">
    <product-card
      v-for="(i, idx) in 9" :key="idx"/>
  </div>

</template>

<script>
import ProductCard from '../product-card/product-card.vue';

export default {
  components: { ProductCard },
};
</script>

<style lang="scss" scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 30px;
}
</style>
