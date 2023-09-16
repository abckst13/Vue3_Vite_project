import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: () => import('@/views/Dashboard.vue') },
        { path: '/analytics', component: () => import('@/views/Analytics.vue') },
        {
            path: '/email/inbox',
            component: () => import('@/views/EmailInbox.vue')
        },
        {
            path: '/email/compose',
            component: () => import('@/views/EmailCompose.vue')
        },
        {
            path: '/email/detail/:id',
            component: () => import('@/views/EmailDetail.vue')
        },
        {
            path: '/email/detail',
            component: () => import('@/views/EmailDetail.vue')
        },
        { path: '/widgets', component: () => import('@/views/Widgets.vue') },
        {
            path: '/pos/customer-order',
            component: () => import('@/views/PosCustomerOrder.vue')
        },
        {
            path: '/pos/kitchen-order',
            component: () => import('@/views/PosKitchenOrder.vue')
        },
        {
            path: '/pos/counter-checkout',
            component: () => import('@/views/PosCounterCheckout.vue')
        },
        {
            path: '/pos/table-booking',
            component: () => import('@/views/PosTableBooking.vue')
        },
        {
            path: '/pos/menu-stock',
            component: () => import('@/views/PosMenuStock.vue')
        },
        {
            path: '/ui/bootstrap',
            component: () => import('@/views/UiBootstrap.vue')
        },
        { path: '/ui/buttons', component: () => import('@/views/UiButtons.vue') },
        { path: '/ui/card', component: () => import('@/views/UiCard.vue') },
        { path: '/ui/icons', component: () => import('@/views/UiIcons.vue') },
        {
            path: '/ui/modal-notifications',
            component: () => import('@/views/UiModalNotifications.vue')
        },
        {
            path: '/ui/typography',
            component: () => import('@/views/UiTypography.vue')
        },
        {
            path: '/ui/tabs-accordions',
            component: () => import('@/views/UiTabsAccordions.vue')
        },
        {
            path: '/form/elements',
            component: () => import('@/views/FormElements.vue')
        },
        {
            path: '/form/plugins',
            component: () => import('@/views/FormPlugins.vue')
        },
        {
            path: '/form/wizards',
            component: () => import('@/views/FormWizards.vue')
        },
        {
            path: '/table/elements',
            component: () => import('@/views/TableElements.vue')
        },
        {
            path: '/table/plugins',
            component: () => import('@/views/TablePlugins.vue')
        },
        {
            path: '/chart/chart-js',
            component: () => import('@/views/ChartJs.vue')
        },
        {
            path: '/chart/chart-apex',
            component: () => import('@/views/ChartApex.vue')
        },
        { path: '/map', component: () => import('@/views/Map.vue') },
        {
            path: '/layout/starter-page',
            component: () => import('@/views/LayoutStarterPage.vue')
        },
        {
            path: '/layout/fixed-footer',
            component: () => import('@/views/LayoutFixedFooter.vue')
        },
        {
            path: '/layout/full-height',
            component: () => import('@/views/LayoutFullHeight.vue')
        },
        {
            path: '/layout/full-width',
            component: () => import('@/views/LayoutFullWidth.vue')
        },
        {
            path: '/layout/boxed-layout',
            component: () => import('@/views/LayoutBoxedLayout.vue')
        },
        {
            path: '/layout/collapsed-sidebar',
            component: () => import('@/views/LayoutCollapsedSidebar.vue')
        },
        {
            path: '/layout/top-nav',
            component: () => import('@/views/LayoutTopNav.vue')
        },
        {
            path: '/layout/mixed-nav',
            component: () => import('@/views/LayoutMixedNav.vue')
        },
        {
            path: '/layout/mixed-nav-boxed-layout',
            component: () => import('@/views/LayoutMixedNavBoxedLayout.vue')
        },
        {
            path: '/page/scrum-board',
            component: () => import('@/views/PageScrumBoard.vue')
        },
        {
            path: '/page/product',
            component: () => import('@/views/PageProduct.vue')
        },
        {
            path: '/page/product-details',
            component: () => import('@/views/PageProductDetails.vue')
        },
        { path: '/page/order', component: () => import('@/views/PageOrder.vue') },
        {
            path: '/page/order-details',
            component: () => import('@/views/PageOrderDetails.vue')
        },
        {
            path: '/page/gallery',
            component: () => import('@/views/PageGallery.vue')
        },
        {
            path: '/page/search-results',
            component: () => import('@/views/PageSearchResults.vue')
        },
        {
            path: '/page/coming-soon',
            component: () => import('@/views/PageComingSoon.vue')
        },
        { path: '/page/error', component: () => import('@/views/PageError.vue') },
        { path: '/page/login', component: () => import('@/views/PageLogin.vue') },
        {
            path: '/page/register',
            component: () => import('@/views/PageRegister.vue')
        },
        {
            path: '/page/messenger',
            component: () => import('@/views/PageMessenger.vue')
        },
        {
            path: '/page/data-management',
            component: () => import('@/views/PageDataManagement.vue')
        },
        { path: '/profile', component: () => import('@/views/Profile.vue') },
        { path: '/calendar', component: () => import('@/views/Calendar.vue') },
        { path: '/settings', component: () => import('@/views/Settings.vue') },
        { path: '/helper', component: () => import('@/views/Helper.vue') },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('@/views/PageError.vue')
        }
    ]
});

export default router;