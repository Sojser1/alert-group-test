<template>
  <button
    class="button"
    :class="value ? 'active' : ''"
    @click="onClickEmit"
  >
    <slot/>
  </button>
</template>

<script src="./picker-button.js"/>

<style scoped lang="scss">
  .button {
    padding: 6px 14px;
    background: #FFFFFF;
    border: 1px solid #D8D8D8;
    box-sizing: border-box;
    border-radius: 5px;
  }

  .active {
    color: white;
    background: #70D24E;
    border-radius: 5px;
  }
</style>
