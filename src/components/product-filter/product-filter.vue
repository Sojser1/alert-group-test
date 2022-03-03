<template>
  <div class="product-filter">
    <range-selector />
    <range-selector
    :label="labelConstants.floor"
    />
    <range-selector
    :label="labelConstants.area"
    />
    <range-selector
    :label="labelConstants.price"
    />
    <range-selector />
  </div>
</template>

<script src="./product-filter.js"/>

<style scoped lang="scss">
.product-filter {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 61px;
}
</style>
