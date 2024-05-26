// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
// 引入fontawesome套件
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/styles.css'; // 引入全域樣式

const app = createApp(App);

app.use(router);

app.mount('#app');
app.component("font-awesome-icon", FontAwesomeIcon)