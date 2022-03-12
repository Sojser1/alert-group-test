<template>
  <div class="actions">
    <v-btn
      class="actions-apply"
      @click="onBtnClick"
    >
      Применить
    </v-btn>
    <button
      class="actions-reset"
      @click="$emit('reset-filter')"
    >
      сбросить фильтр
    </button>
  </div>
</template>

<script src="./filter-actions.js"/>

<style scoped lang="scss">
  .actions {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .actions-apply {
      width: 201px;
      height: 40px;
      background: #70D24E;
      border-radius: 5px;
      color: white;
    }

    .actions-reset {
      cursor: pointer;
      font-style: normal;
      font-weight: 700;
      font-size: 10px;
      line-height: 28px;
      position: relative;

      &::after {
        content: '';
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: 5px;
        left: 0;
        background: #70D24E;
      }
    }
  }
</style>
