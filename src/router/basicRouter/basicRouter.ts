export default [
    { path: '/', component: () => import('@/views/basicView/Dashboard.vue') },
    { path: '/analytics', component: () => import('@/views/basicView/Analytics.vue') },
    {
        path: '/email/inbox',
        component: () => import('@/views/basicView/EmailInbox.vue')
    },
    {
        path: '/email/compose',
        component: () => import('@/views/basicView/EmailCompose.vue')
    },
    {
        path: '/email/detail/:id',
        component: () => import('@/views/basicView/EmailDetail.vue')
    },
    {
        path: '/email/detail',
        component: () => import('@/views/basicView/EmailDetail.vue')
    },
    { path: '/widgets', component: () => import('@/views/basicView/Widgets.vue') },
    {
        path: '/pos/customer-order',
        component: () => import('@/views/basicView/PosCustomerOrder.vue')
    },
    {
        path: '/pos/kitchen-order',
        component: () => import('@/views/basicView/PosKitchenOrder.vue')
    },
    {
        path: '/pos/counter-checkout',
        component: () => import('@/views/basicView/PosCounterCheckout.vue')
    },
    {
        path: '/pos/table-booking',
        component: () => import('@/views/basicView/PosTableBooking.vue')
    },
    {
        path: '/pos/menu-stock',
        component: () => import('@/views/basicView/PosMenuStock.vue')
    },
    {
        path: '/ui/bootstrap',
        component: () => import('@/views/basicView/UiBootstrap.vue')
    },
    { path: '/ui/buttons', component: () => import('@/views/basicView/UiButtons.vue') },
    { path: '/ui/card', component: () => import('@/views/basicView/UiCard.vue') },
    { path: '/ui/icons', component: () => import('@/views/basicView/UiIcons.vue') },
    {
        path: '/ui/modal-notifications',
        component: () => import('@/views/basicView/UiModalNotifications.vue')
    },
    {
        path: '/ui/typography',
        component: () => import('@/views/basicView/UiTypography.vue')
    },
    {
        path: '/ui/tabs-accordions',
        component: () => import('@/views/basicView/UiTabsAccordions.vue')
    },
    {
        path: '/form/elements',
        component: () => import('@/views/basicView/FormElements.vue')
    },
    {
        path: '/form/plugins',
        component: () => import('@/views/basicView/FormPlugins.vue')
    },
    {
        path: '/form/wizards',
        component: () => import('@/views/basicView/FormWizards.vue')
    },
    {
        path: '/table/elements',
        component: () => import('@/views/basicView/TableElements.vue')
    },
    {
        path: '/table/plugins',
        component: () => import('@/views/basicView/TablePlugins.vue')
    },
    {
        path: '/chart/chart-js',
        component: () => import('@/views/basicView/ChartJs.vue')
    },
    {
        path: '/chart/chart-apex',
        component: () => import('@/views/basicView/ChartApex.vue')
    },
    { path: '/map', component: () => import('@/views/basicView/Map.vue') },
    {
        path: '/layout/starter-page',
        component: () => import('@/views/basicView/LayoutStarterPage.vue')
    },
    {
        path: '/layout/fixed-footer',
        component: () => import('@/views/basicView/LayoutFixedFooter.vue')
    },
    {
        path: '/layout/full-height',
        component: () => import('@/views/basicView/LayoutFullHeight.vue')
    },
    {
        path: '/layout/full-width',
        component: () => import('@/views/basicView/LayoutFullWidth.vue')
    },
    {
        path: '/layout/boxed-layout',
        component: () => import('@/views/basicView/LayoutBoxedLayout.vue')
    },
    {
        path: '/layout/collapsed-sidebar',
        component: () => import('@/views/basicView/LayoutCollapsedSidebar.vue')
    },
    {
        path: '/layout/top-nav',
        component: () => import('@/views/basicView/LayoutTopNav.vue')
    },
    {
        path: '/layout/mixed-nav',
        component: () => import('@/views/basicView/LayoutMixedNav.vue')
    },
    {
        path: '/layout/mixed-nav-boxed-layout',
        component: () => import('@/views/basicView/LayoutMixedNavBoxedLayout.vue')
    },
    {
        path: '/page/scrum-board',
        component: () => import('@/views/basicView/PageScrumBoard.vue')
    },
    {
        path: '/page/product',
        component: () => import('@/views/basicView/PageProduct.vue')
    },
    {
        path: '/page/product-details',
        component: () => import('@/views/basicView/PageProductDetails.vue')
    },
    { path: '/page/order', component: () => import('@/views/basicView/PageOrder.vue') },
    {
        path: '/page/order-details',
        component: () => import('@/views/basicView/PageOrderDetails.vue')
    },
    {
        path: '/page/gallery',
        component: () => import('@/views/basicView/PageGallery.vue')
    },
    {
        path: '/page/search-results',
        component: () => import('@/views/basicView/PageSearchResults.vue')
    },
    {
        path: '/page/coming-soon',
        component: () => import('@/views/basicView/PageComingSoon.vue')
    },
    { path: '/page/error', component: () => import('@/views/basicView/PageError.vue') },
    { path: '/page/login', component: () => import('@/views/basicView/PageLogin.vue') },
    {
        path: '/page/register',
        component: () => import('@/views/basicView/PageRegister.vue')
    },
    {
        path: '/page/messenger',
        component: () => import('@/views/basicView/PageMessenger.vue')
    },
    {
        path: '/page/data-management',
        component: () => import('@/views/basicView/PageDataManagement.vue')
    },
    { path: '/profile', component: () => import('@/views/basicView/Profile.vue') },
    { path: '/calendar', component: () => import('@/views/basicView/Calendar.vue') },
    { path: '/settings', component: () => import('@/views/basicView/Settings.vue') },
    { path: '/helper', component: () => import('@/views/basicView/Helper.vue') },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/basicView/PageError.vue')
    }
];
