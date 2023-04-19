import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en_data from './en1.json';
import ko_data from './en2.json';
import en_data2 from './en.json';
import ko_data2 from './ko.json';

const resource = {
    en: {
        one: en_data,
        two: en_data2
    },
    ko: {
        one: ko_data,
        two: ko_data2
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: resource,
        lng: 'ko',
        fallbackLng: 'en',
        debug: true,
        defaultNS: 'two',
        keySeparator: '.',
        interpolation: { escapeValue: false },
        react: { useSuspense: false },
    });

export default i18n;
