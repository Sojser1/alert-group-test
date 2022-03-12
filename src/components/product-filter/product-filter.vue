<template>
  <div class="product-filter">
    <room-picker
      :label="labelConstants.room"
      v-model="filter.rooms"
    />
    <range-selector
    :label="labelConstants.floor"
    v-model="filter.floor"

    />
    <range-selector
    :label="labelConstants.area"
    v-model="filter.area"
    />
    <range-selector
    :label="labelConstants.price"
    v-model="filter.price"
    />
    <filter-actions
    />
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
