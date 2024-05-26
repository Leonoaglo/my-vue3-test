<template>
  <CartSidebar :isActive="isActive" @update:isActive="isActive = $event" />
  <router-view />
</template>

<script setup>
import { ref, provide } from 'vue';
import CartSidebar from './components/CartSidebar.vue';

const isActive = ref(false);
const cart = ref([]);

provide('emitCartEvent', (event, value) => {
  if (event === 'update:isActive') {
    isActive.value = value;
  }
});

provide('cart', cart);
</script>

<style scoped>
@import './assets/styles.css';
</style>
