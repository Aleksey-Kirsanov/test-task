<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
</script>

<template>
  <div class="tw-mx-[60px] tw-w-[1440px]">
    <HeaderComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>

<style lang="scss" scoped></style>
