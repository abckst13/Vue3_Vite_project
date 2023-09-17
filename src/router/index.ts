import { createRouter, createWebHistory } from 'vue-router';
import basicRouter from '../router/basicRouter/basicRouter';
import testRouter from '../router/testRouter/testRouter';
import { createI18nInstance } from '../resource/commI18nInstance';

const i18n = createI18nInstance();
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('@/views/layout/mainLayout.vue'),
            children: [...basicRouter, ...testRouter]
        }
    ]
});

router.beforeEach((to, from, next) => {
    // Check if the route is going to the i18n page
    if (to.path.includes('/test/')) {
        // Set the language to 'en' (English) for the i18n page
        i18n.global.locale.value = 'en';
    }
    next();
});

export default router;
