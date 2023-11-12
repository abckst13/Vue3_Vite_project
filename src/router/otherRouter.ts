export const otherRouters = [
    { path: '/', component: () => import('@/views/otherView/Dashboard.vue') },
    { path: '/analytics', component: () => import('@/views/otherView/Analytics.vue') },
    {
        path: '/email/inbox',
        component: () => import('@/views/otherView/EmailInbox.vue')
    },
    {
        path: '/email/compose',
        component: () => import('@/views/otherView/EmailCompose.vue')
    },
    {
        path: '/email/detail/:id',
        component: () => import('@/views/otherView/EmailDetail.vue')
    },
    {
        path: '/email/detail',
        component: () => import('@/views/otherView/EmailDetail.vue')
    },
    { path: '/widgets', component: () => import('@/views/otherView/Widgets.vue') },
    {
        path: '/pos/customer-order',
        component: () => import('@/views/otherView/PosCustomerOrder.vue')
    },
    {
        path: '/pos/kitchen-order',
        component: () => import('@/views/otherView/PosKitchenOrder.vue')
    },
    {
        path: '/pos/counter-checkout',
        component: () => import('@/views/otherView/PosCounterCheckout.vue')
    },
    {
        path: '/pos/table-booking',
        component: () => import('@/views/otherView/PosTableBooking.vue')
    },
    {
        path: '/pos/menu-stock',
        component: () => import('@/views/otherView/PosMenuStock.vue')
    },
    {
        path: '/ui/bootstrap',
        component: () => import('@/views/otherView/UiBootstrap.vue')
    },
    { path: '/ui/buttons', component: () => import('@/views/otherView/UiButtons.vue') },
    { path: '/ui/card', component: () => import('@/views/otherView/UiCard.vue') },
    { path: '/ui/icons', component: () => import('@/views/otherView/UiIcons.vue') },
    {
        path: '/ui/modal-notifications',
        component: () => import('@/views/otherView/UiModalNotifications.vue')
    },
    {
        path: '/ui/typography',
        component: () => import('@/views/otherView/UiTypography.vue')
    },
    {
        path: '/ui/tabs-accordions',
        component: () => import('@/views/otherView/UiTabsAccordions.vue')
    },
    {
        path: '/form/elements',
        component: () => import('@/views/otherView/FormElements.vue')
    },
    {
        path: '/form/plugins',
        component: () => import('@/views/otherView/FormPlugins.vue')
    },
    {
        path: '/form/wizards',
        component: () => import('@/views/otherView/FormWizards.vue')
    },
    {
        path: '/table/elements',
        component: () => import('@/views/otherView/TableElements.vue')
    },
    {
        path: '/table/plugins',
        component: () => import('@/views/otherView/TablePlugins.vue')
    },
    {
        path: '/chart/chart-js',
        component: () => import('@/views/otherView/ChartJs.vue')
    },
    {
        path: '/chart/chart-apex',
        component: () => import('@/views/otherView/ChartApex.vue')
    },
    { path: '/map', component: () => import('@/views/otherView/Map.vue') },
    {
        path: '/layout/starter-page',
        component: () => import('@/views/otherView/LayoutStarterPage.vue')
    },
    {
        path: '/layout/fixed-footer',
        component: () => import('@/views/otherView/LayoutFixedFooter.vue')
    },
    {
        path: '/layout/full-height',
        component: () => import('@/views/otherView/LayoutFullHeight.vue')
    },
    {
        path: '/layout/full-width',
        component: () => import('@/views/otherView/LayoutFullWidth.vue')
    },
    {
        path: '/layout/boxed-layout',
        component: () => import('@/views/otherView/LayoutBoxedLayout.vue')
    },
    {
        path: '/layout/collapsed-sidebar',
        component: () => import('@/views/otherView/LayoutCollapsedSidebar.vue')
    },
    {
        path: '/layout/top-nav',
        component: () => import('@/views/otherView/LayoutTopNav.vue')
    },
    {
        path: '/layout/mixed-nav',
        component: () => import('@/views/otherView/LayoutMixedNav.vue')
    },
    {
        path: '/layout/mixed-nav-boxed-layout',
        component: () => import('@/views/otherView/LayoutMixedNavBoxedLayout.vue')
    },
    {
        path: '/page/scrum-board',
        component: () => import('@/views/otherView/PageScrumBoard.vue')
    },
    {
        path: '/page/product',
        component: () => import('@/views/otherView/PageProduct.vue')
    },
    {
        path: '/page/product-details',
        component: () => import('@/views/otherView/PageProductDetails.vue')
    },
    { path: '/page/order', component: () => import('@/views/otherView/PageOrder.vue') },
    {
        path: '/page/order-details',
        component: () => import('@/views/otherView/PageOrderDetails.vue')
    },
    {
        path: '/page/gallery',
        component: () => import('@/views/otherView/PageGallery.vue')
    },
    {
        path: '/page/search-results',
        component: () => import('@/views/otherView/PageSearchResults.vue')
    },
    {
        path: '/page/coming-soon',
        component: () => import('@/views/otherView/PageComingSoon.vue')
    },
    { path: '/page/error', component: () => import('@/views/otherView/PageError.vue') },
    { path: '/page/login', component: () => import('@/views/otherView/PageLogin.vue') },
    {
        path: '/page/register',
        component: () => import('@/views/otherView/PageRegister.vue')
    },
    {
        path: '/page/messenger',
        component: () => import('@/views/otherView/PageMessenger.vue')
    },
    {
        path: '/page/data-management',
        component: () => import('@/views/otherView/PageDataManagement.vue')
    },
    { path: '/profile', component: () => import('@/views/otherView/Profile.vue') },
    { path: '/calendar', component: () => import('@/views/otherView/Calendar.vue') },
    { path: '/settings', component: () => import('@/views/otherView/Settings.vue') },
    { path: '/helper', component: () => import('@/views/Helper.vue') },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/otherView/PageError.vue')
    }
];

export default otherRouters;
