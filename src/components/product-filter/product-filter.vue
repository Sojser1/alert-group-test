<template>
  <div class="product-filter">
    <room-picker
      class="filter"
      :label="labelConstants.room"
      v-model="filter.rooms"
    />
    <range-selector
      class="filter"
      :label="labelConstants.floor"
      v-model="filter.floor"

    />
    <range-selector
      class="filter"
      :label="labelConstants.area"
      v-model="filter.area"
    />
    <range-selector
      class="filter"
      :label="labelConstants.price"
      v-model="filter.price"
    />
    <filter-actions
      class="filter"
      @apply-filter="applyFilter"
      @reset-filter="resetFilter"
    />
  </div>
</template>

<script src="./product-filter.js"/>

<style scoped lang="scss">
  .product-filter {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 61px;

    .filter {
      position: relative;
      &::after {
        content: '';
        width: 1px;
        height: 20px;
        background: #EBEBEB;
        top: calc(50% - 17px);
        right: -30px;
        position: absolute;
      }
      &:nth-child(5) {
        &::after {
          content: none;
        }
      }
    }
  }
</style>
