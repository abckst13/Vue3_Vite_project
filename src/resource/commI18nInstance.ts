import { createI18n } from 'vue-i18n';
import enLocale from '../locales/en.json';
import koLocale from '../locales/ko.json';

export const createI18nInstance = () => {
    return createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'en', // Default locale
        messages: {
            en: enLocale,
            ko: koLocale
        }
    });
};

export default createI18nInstance;
