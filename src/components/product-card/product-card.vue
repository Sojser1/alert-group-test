<template>
  <v-hover v-slot="{ hover }">
    <v-card
      class="product-card"
      width="270"
      height="365"
    >
      <div class="product-card__title mt-5">
        <p>3 этаж</p>
        <p>1 комната - 22.94м2</p>
      </div>
      <div
        class="product-card__main"
        :class="hover ? 'active-product-card': ''"
      >
        <img
          class="product-card__image"
          :class="hover ? 'active-product-image': ''"
          :src="image"
          alt="floor"
        />
      </div>
      <div class="product-card__price">
        <p class="product-card__price-title">
          2 729 860 р.
        </p>
        <p class="product-card__price-subtitle">
          199 000 р. за м2
        </p>
      </div>
      <transition
        enter-active-class="animate__animated animate__flipInX"
      >
      <div
        class="product-card__actions"
        v-if="hover"
      >
          <v-btn
            class="product-card__button"
          >
            ПОДРОБНЕЕ
          </v-btn>
      </div>
      </transition>
    </v-card>
  </v-hover>
</template>

<script src="./product-card.js"/>

<style lang="scss" scoped>
.product-card {
  box-shadow: 0 5px 20px rgba(86, 86, 86, 0.05);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  overflow: hidden;

  .product-card__title {
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    margin-top: 8px;
    align-self: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 28px;
    color: #2C323A;

    p:nth-child(1) {
      opacity: 0.5;
    }
  }

  .product-card__main {
    border: 1px solid #EBEBEB;
    border-radius: 5px;
    width: 250px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .2s;

    .product-card__image {
      width: 188px;
      height: 233px;
      transform: rotate(90deg);
    }
    .active-product-card {
      height: 200px;
      transition: .3s;
    }
    .active-product-image {
      width: 152px;
      height: 186px;
      transition: .3s;
    }

    :not(.active-product-card,.active-product-image) {
      transition: .2s;
    }
  }

  .product-card__price {
    align-self: flex-end;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    line-height: 28px;
    font-weight: bold;

    .product-card__price-title {
      font-size: 20px;
      color: #2C323A;
    }

    .product-card__price-subtitle {
      font-size: 12px;
      color: #a8a8a8;
      text-align: end;
    }
  }

  .product-card__actions {
    width: 100%;

    .product-card__button {
      width: 250px;
      height: 40px;
      background: #70D24E;
      border-radius: 2px 2px 5px 5px;
      outline: none;
      border: none;
      color: #EBEBEB;
    }
  }
}
</style>
