import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// import en_data from './en.json';
import en_data from './transition_en.json';
// import ko_data from './ko.json';
import ko_data from './transition_ko.json';

const resource = {
    en: en_data,
    ko: ko_data,
};

i18n
    // 유저가 브러우저에서 어떤 언어를 쓰고 있는 찾는 플러그인
    .use(LanguageDetector)
    // i18n instance를 react-i18next로 전달
    .use(initReactI18next)
    // init i18bext
    .init({
        resources: resource,
        // 초기 설정 언어
        lng: 'ko',
        fallbackLng: 'en',
        // 어디서 다국어 처리가 되지 않는지 알 수 있게 하는 옵션
        debug: true,
        // defaultNS: 'translation',
        keySeparator: false,
        // 해당 기능은 react 에서는 필요하지 않다고 한다.(이미 default로 설정되어 있기 때문)
        interpolation: { escapeValue: false },
        react: { useSuspense: false },
    });

export default i18n;
