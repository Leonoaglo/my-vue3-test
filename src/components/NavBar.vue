<template>
  <nav class="nav-bar">
    <div class="logo">
      浮生茶旅
    </div>
    <div class="nav-cart-btn" @click="handleCartClick">
      <img src="/images/cart.svg" alt="">
    </div>
  </nav>
</template>

<script setup>
import { inject } from 'vue';

const emit = inject('emitCartEvent');

const handleCartClick = () => {
  emit('update:isActive', true);
};
</script>

<style scoped>
@import '../assets/styles.css';
</style>
