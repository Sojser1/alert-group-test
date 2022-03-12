<template>
  <div class="room-picker">
    <div class="room-picker__title">
      <h3>{{label}}</h3>
    </div>
    <div class="room-picker__actions">
      <picker-button @click="onActionClick('XS')" v-model="roomXS">XS</picker-button>
      <picker-button @click="onActionClick('1k')" v-model="room1k">1k</picker-button>
      <picker-button @click="onActionClick('2k')" v-model="room2k">2k</picker-button>
      <picker-button @click="onActionClick('3k')" v-model="room3k">3k</picker-button>
    </div>
  </div>
</template>

<script src="./room-picker.js"/>

<style scoped lang="scss">
  .room-picker {
    .room-picker__title {
      font-weight: bold;
      font-size: 12px;
      line-height: 28px;
    }
    .room-picker__actions {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 4px;
      margin-top: 13px;
    }
  }
</style>
