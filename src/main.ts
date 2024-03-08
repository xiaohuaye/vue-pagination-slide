import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { Slider } from 'ant-design-vue';

const app = createApp(App);

app.use(Slider).mount('#app');
