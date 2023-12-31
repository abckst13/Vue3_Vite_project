import { defineStore } from 'pinia';

export const useAppOptionStore = defineStore({
    id: 'appOption',
    state: () => {
        return {
            appMode: '',
            appThemeClass: '',
            appCoverClass: '',
            appBoxedLayout: false,
            appHeaderHide: false,
            appHeaderSearchToggled: false,
            appSidebarCollapsed: false,
            appSidebarToggled: true,
            appSidebarMobileToggled: false,
            appSidebarMobileClosed: false,
            appSidebarHide: false,
            appContentFullHeight: false,
            appContentClass: '',
            appTopNav: false,
            appFooter: false,
            appFooterFixed: false,
            appThemePanelToggled: false
        };
    }
});
