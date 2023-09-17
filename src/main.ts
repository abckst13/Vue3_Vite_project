import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css';
import '@marcoschulte/vue3-progress/dist/index.css';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/regular.scss';
import '@fortawesome/fontawesome-free/scss/solid.scss';
import '@fortawesome/fontawesome-free/scss/brands.scss';
import '@fortawesome/fontawesome-free/scss/v4-shims.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';
import './scss/styles.scss';
import App from './App.vue';
import { createApp } from 'vue';
import { commFilter } from '@/resource/commFilter';
import { createI18nInstance } from '../src/resource/commI18nInstance'; // Adjust the path accordingly

const i18n = createI18nInstance();
const app = createApp(App);

commFilter(app);
app.use(i18n);
await app.mount('#app');
