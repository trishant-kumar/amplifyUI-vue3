import { createApp } from 'vue';
import './style.css'
import App from './App.vue';
import '@aws-amplify/ui-vue/styles.css';

const app = createApp(App);
app.mount('#app');