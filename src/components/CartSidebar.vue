<template>
  <div class="cart-sidebar" :class="{ active: isActive }">
    <button class="close-btn" @click="closeSidebar">X</button>
    <div class="cart-content">
      <h4>浮生茶旅購物車</h4>
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <img :src="item.thumb" :alt="item.name" class="cart-item-thumb" />
        <div class="cart-item-info">
          <h5>{{ item.name }}</h5>
          <p>單價: {{ item.price }}</p>
          <div class="action-box">
            <button class="round" @click="minusOne(item)">-</button>
            <span>{{ item.amount }}</span>
            <button class="round" @click="addOne(item)">+</button>
          </div>
          <div class="total">單品總價: {{ item.price * item.amount }}</div>
        </div>
        <button class="remove-btn" @click="removeItem(item.id)">X</button>
      </div>
      <div class="cart-summary">
        <div class="alltotal">總商品數量: {{ totalQuantity }}</div>
        <div class="allprice">總金額: {{ totalPrice }}</div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { computed, inject } from 'vue';

const cart = inject('cart');
const emit = inject('emitCartEvent');

const props = defineProps({
  isActive: Boolean
});

const closeSidebar = () => {
  emit('update:isActive', false);
};

const removeItem = (id) => {
  const index = cart.value.findIndex(item => item.id === id);
  if (index !== -1) {
    cart.value.splice(index, 1);
  }
};

const addOne = (item) => {
  item.amount++;
};

const minusOne = (item) => {
  if (item.amount > 1) {
    item.amount--;
  } else {
    removeItem(item.id);
  }
};

// 計算所有商品的總數量
const totalQuantity = computed(() => {
  return cart.value.reduce((sum, item) => sum + item.amount, 0);
});

// 計算所有商品的總金額
const totalPrice = computed(() => {
  return cart.value.reduce((sum, item) => sum + item.price * item.amount, 0);
});
</script>

<style scoped>
@import '../assets/styles.css';
</style>
