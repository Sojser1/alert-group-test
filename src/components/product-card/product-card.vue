<template>
  <v-hover v-slot="{ hover }">
    <v-card
      class="product-card"
      width="270"
      height="365"
    >
      <div class="product-card__title mt-0">
        <p>{{product.floor}} этаж</p>
        <p>{{product.rooms}} комната - {{product.square}}м2</p>
      </div>
      <div
        class="product-card__main"
        :class="hover ? 'active-product-card': ''"
      >
        <div class="product-card__number" >
          <span>№{{product['building_id']}}</span>
        </div>
        <img
          class="product-card__image"
          :class="hover ? 'active-product-image': ''"
          :src="imageSelect(product.plan)"
          alt="floor"
        />
      </div>
      <div class="product-card__price">
        <span class="product-card__price-title">
          {{formatedPrice(product.price)}} р.
        </span>
        <span class="product-card__price-subtitle">
          {{priceForOneMetre(product.price, product.square)}} р. за м²
        </span>
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

    p {
      margin-bottom: 0;
    }

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
    flex-direction: column;
    transition: .2s;
    position: relative;

    .product-card__number {
      border-radius: 0 5px;
      border: 1px solid #EBEBEB;
      border-top: none;
      border-right: none;
      height: 30px;
      width: 62px;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        font-weight: 700;
        font-size: 14px;
        line-height: 28px;
        text-transform: uppercase;
        color: #2C323A;
      }
    }

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
    margin-top: 6px;

    .product-card__price-title {
      font-size: 20px;
      color: #2C323A;
    }

    .product-card__price-subtitle {
      font-size: 12px;
      color: #a8a8a8;
      text-align: end;
      margin-bottom: 10px;
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
