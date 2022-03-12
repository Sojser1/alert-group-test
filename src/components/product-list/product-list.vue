<template>
  <div class="product-list">
    <product-filter
    class="product-list__header"
    />
    <div class="product-list__cards">
      <product-card
        v-for="product in products" :key="product.id"
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
    align-items: center;
    justify-items: center;
    overflow-y: scroll;
    height: calc(100vh - 212px);
  }
}
</style>
