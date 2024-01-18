<script setup>
import { ref } from "vue";
import API from "../../../api";

const data = ref(API.products.fetchAll());
console.log(data);
</script>

<template>
  <div v-if="products">
    <p>Тип</p>
    <ul>
      <li v-for="product of products.value" :key="product.id">
        {{ product.title }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
