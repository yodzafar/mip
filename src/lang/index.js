import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import ru from './locale/ru.json'
import uz from './locale/uz.json'

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ru,
            uz
        },
        lng: 'ru',
        // debug: process.env.NODE_ENV !== 'production',
        ns: ['translations'],
        defaultNS: 'translations',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
            formatSeparator: ',',
        },
        react: {
            useSuspense: true,
        },
    });
export default i18n;