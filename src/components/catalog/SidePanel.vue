<script setup>
import { ref } from "vue";
import TypeProduct from "../catalog/sidePanel/TypeProduct.vue";

const totalProducts = ref({ 1: 1, 2: 2, 3: 3 });
const productsQuentity = ref(Object.keys(totalProducts.value).length);
const filtersClose = ref(true);
</script>

<template>
  <div class="tw-w-[343px]">
    <div class="title tw-items-center">
      <h1>Все изделия</h1>
      <p>{{ productsQuentity }} товаров</p>
    </div>
    <button class="filtersClose" @click="filtersClose = false">
      <ins>Спрятать фильтры</ins>
    </button>
    <div class="filfers">
      <type-product />
      <!-- <price-product />
      <material-product />
      <additional-filters /> -->
    </div>
    <button class="filtersClose tw-mb-[30px]" @click="filtersClose = false">
      <ins>Очистить фильтр</ins>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.title {
  width: 343px;
  margin: 30px 0 12px 60px;
  display: flex;
}
.title h1 {
  font-size: 28px;
  font-weight: 600;
  color: #667080;
}
.title p {
  font-size: 11px;
  font-weight: 400;
  color: #66708099;
  margin-left: 10px;
}
.filtersClose {
  margin-left: 60px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 400;
  color: #66708099;
  margin-left: 70px;
}
.filfers {
  margin: 30px 70px 30px 60px;
}
</style>
