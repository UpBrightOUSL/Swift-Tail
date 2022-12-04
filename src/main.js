import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/tailwind.css';
import './assets/main.css';
import veeValidatePlugin from './includes/validation';

const app = createApp(App);
app.use(store);
app.use(router);
app.use(veeValidatePlugin);
app.mount('#app');
