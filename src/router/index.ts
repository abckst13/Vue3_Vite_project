import { createRouter, createWebHistory } from 'vue-router';
import { otherRouters } from '@/router/otherRouter.ts';
import { serviceRouters } from '@/router/serviceRouter.ts';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [...otherRouters, ...serviceRouters]
});

export default router;
