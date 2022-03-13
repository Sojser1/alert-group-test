<template>
  <div class="product-list">
    <product-filter
    class="product-list__header"
    @apply-filter="applyFilter"
    @reset-filter="resetFilter"
    />
    <div
      class="product-list__cards"
      v-if="getProducts"
    >
      <product-card
        v-for="(product, idx) in filteredProducts" :key="idx"
        :product="product"
      />
    </div>
  </div>

</template>

<script src="./product-list.js" />

<style lang="scss" scoped>
.product-list {

  .product-list__cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 30px;
    grid-column-gap: 30px;
    align-items: start;
    justify-items: center;
    overflow-y: scroll;
    height: calc(100vh - 262px);
    margin-top: 20px;
  }
}
  @media (max-width: 1350px) {
    .product-list {
      .product-list__cards {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }

@media (max-width: 950px) {
  .product-list {
    .product-list__cards {
      grid-template-columns: repeat(1, 1fr);
      height: calc(100vh - 850px);
    }
  }
}
</style>
