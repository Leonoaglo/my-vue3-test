<template>
  <div>
    <NavBar />
    <div class="product-detail">

      <div class="col-lg-6 col-md-12 pdt-detail-item">
        <div class="pdt-detail-box pic">
          <img :src="product.thumb" :alt="product.name" />
        </div>
      </div>

      <div class="col-lg-6 col-md-12 pdt-detail-item">
        <div class="pdt-detail-box word">
          <h2>{{ product.name }}</h2>
          <p class="pdt-detail-price">$ {{ product.price }} 元</p>
          <div class="pdt-des">
            <p>{{ product.depiction }}</p>
          </div>
          <div class="action-box">
            <div class="action-amount-box">
              <button class="round" @click="minusOne">-</button>
              <span>{{ productAmount }}</span>
              <button class="round" @click="addOne">+</button>
            </div>
            <div class="btn-box">
              <button @click="addToCart" class="cart-btn">ADD TO CART</button>
              <button @click="goBack" class="back-btn">BACK</button>
            </div>

          </div>
          
          
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import NavBar from './NavBar.vue';
import { useProducts } from '../api';

const { products } = useProducts();
const cart = inject('cart');
const emit = inject('emitCartEvent');

const route = useRoute();
const router = useRouter();

const product = computed(() => {
  return products.value.find(p => p.id === route.params.id);
});

const goBack = () => {
  router.push({ name: 'ProductList' });
};

const productAmount = ref(1);

const addOne = () => {
  productAmount.value++;
  productAmount.value = productAmount.value > 12 ? 12 : productAmount.value;
};

const minusOne = () => {
  productAmount.value--;
  productAmount.value = productAmount.value < 1 ? 1 : productAmount.value;
};

const addToCart = () => {
  const cartProduct = cart.value.find(item => item.id === product.value.id);
  if (cartProduct) {
    cartProduct.amount += productAmount.value;
  } else {
    cart.value.push({ ...product.value, amount: productAmount.value });
  }
  emit('update:isActive', true); // Show the cart sidebar when an item is added
};
</script>

<style scoped>
@import '../assets/styles.css';

</style>
