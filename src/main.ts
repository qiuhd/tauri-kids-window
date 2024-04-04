import { createApp } from 'vue'
import "./style.css";
import 'primeicons/primeicons.css';
import App from './App.vue'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Wind from './presets/wind';      //import preset
import Toast from "primevue/toast";
import router from './router'
import Ripple from "primevue/ripple";

const app = createApp(App);
app.use(PrimeVue, {
    unstyled: true,
    pt: Wind
})
app.use(ToastService);
app.use(router)
app.directive('ripple', Ripple);
app.component('Toast', Toast)

app.mount('#app');
