<template>
  <div class="range-selector">
    <div class="range-selector__title">
      <h3>{{label}}</h3>
    </div>
    <div class="range-selector__text-inputs">
      <v-text-field
        class="range-selector-input"
        outlined dense hide-details
        v-model="rangeValue[0]"/>
      <v-text-field
        class="range-selector-input"
        outlined dense hide-details
        v-model="rangeValue[1]"/>
    </div>
    <v-range-slider
      v-model="rangeValue"
      :max="max"
      :min="min"
    />
  </div>
</template>

<script src="./range-selector.js"/>

<style scoped lang="scss">
.range-selector {
  display: grid;
  grid-template-rows: repeat(2, 1fr);

  .range-selector__title {
    font-weight: bold;
    font-size: 12px;
    line-height: 28px;
  }

  .range-selector__text-inputs {
    display: flex;
    justify-content: space-between;

    .range-selector-input{
      max-height: 40px;
      max-width: 80px;
      border: 1px solid #D8D8D8;
      box-sizing: border-box;
      border-radius: 5px;
      outline: none;
    }
  }
}
</style>
