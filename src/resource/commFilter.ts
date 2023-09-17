import router from '../router';
import mitt from 'mitt';
import { createPinia } from 'pinia';
import { Vue3ProgressPlugin } from '@marcoschulte/vue3-progress';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import Card from '@/components/bootstrap/Card.vue';
import CardBody from '@/components/bootstrap/CardBody.vue';
import CardHeader from '@/components/bootstrap/CardHeader.vue';
import CardFooter from '@/components/bootstrap/CardFooter.vue';
import CardGroup from '@/components/bootstrap/CardGroup.vue';
import CardImgOverlay from '@/components/bootstrap/CardImgOverlay.vue';
import CardExpandToggler from '@/components/bootstrap/CardExpandToggler.vue';
import { createI18n } from 'vue-i18n';
// import pinia from '../stores/authStore/authStore';
import enLocale from '../locales/en.json';
import koLocale from '../locales/ko.json';

const pinia = createPinia();
export const commFilter = app => {
    const emitter = mitt();

    app.component('Card', Card);
    app.component('CardBody', CardBody);
    app.component('CardHeader', CardHeader);
    app.component('CardFooter', CardFooter);
    app.component('CardGroup', CardGroup);
    app.component('CardImgOverlay', CardImgOverlay);
    app.component('CardExpandToggler', CardExpandToggler);

    app.use(createPinia());
    app.use(router);
    app.use(pinia);
    app.use(Vue3ProgressPlugin);
    app.use(PerfectScrollbar);

    app.config.globalProperties.emitter = emitter;
};
export default commFilter;
