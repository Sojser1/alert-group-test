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

  @media (max-width: 1350px) {
    .product-filter {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);

      .filter:nth-child(1) {
        grid-column: 1;
        grid-row: 1;
      }

      .filter:nth-child(2) {
        grid-column: 1;
        grid-row: 2;
      }

      .filter:nth-child(3) {
        grid-column: 2;
        grid-row: 1;

        &::after {
          content: none;
        }
      }

      .filter:nth-child(4) {
        grid-column: 2;
        grid-row: 2;

        &::after {
          content: none;
        }
      }

      .filter:nth-child(5) {
        grid-column: 3;
        grid-row: 1 / -1;
      }
    }
  }

  @media (max-width: 950px) {
    .product-filter {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(5, 1fr);

      .filter {
        &:nth-child(1) {
          grid-column: 1;
          grid-row: 1;
        }

        &:nth-child(2) {
          grid-column: 1;
          grid-row: 2;
        }

        &:nth-child(3) {
          grid-column: 1;
          grid-row: 3;
        }

        &:nth-child(4) {
          grid-column: 1;
          grid-row: 4;
        }

        &:nth-child(5) {
          grid-column: 1;
          grid-row: 5;
        }

        &::after {
          content: none;
        }
      }
    }
  }
</style>
