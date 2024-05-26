<template>
  <div id="app">
    <div class="tea">
      <NavBar />
      <main :class="{ shift: isShowingCart }">
        <div class="content">
          <div class="pdt-block">
            <div v-for="product in products" :key="product.id" class="product col-lg-4 col-md-6 col-sm-12">
              <div class="pdt-part">
                <div class="info-box">
                  <div class="pdt-box pic">
                    <img :src="product.thumb" :alt="product.name" />
                  </div>
                  <div class="pdt-item-content">
                    <h2>{{ product.name }}</h2>
                    <p>{{ product.price }}</p>
                    <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">
                      <button class="todetail-btn">產品詳細</button>
                    </router-link>
                  </div>
                </div>
                <div class="action-box">
                  <button class="round" @click="minusOne(product)">-</button>
                  <span>{{ product.amountShow }}</span>
                  <button class="round" @click="addOne(product)">+</button>
                  <button @click="addToCart(product)" class="cart-btn">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import NavBar from './NavBar.vue';
import { useProducts } from '../api';

const { products } = useProducts();
const cart = inject('cart');
const emit = inject('emitCartEvent');

const isShowingCart = ref(false);

const addOne = (product) => {
  product.amountShow++;
  product.amountShow = product.amountShow > 12 ? 12 : product.amountShow;
};

const minusOne = (product) => {
  product.amountShow--;
  product.amountShow = product.amountShow < 1 ? 1 : product.amountShow;
};

const addToCart = (product) => {
  const cartProduct = cart.value.find(item => item.id === product.id);
  if (cartProduct) {
    cartProduct.amount += product.amountShow;
  } else {
    cart.value.push({ ...product, amount: product.amountShow });
  }
  emit('update:isActive', true); // Show the cart sidebar when an item is added
};
</script>

<style scoped>
@import '../assets/styles.css';
</style>
