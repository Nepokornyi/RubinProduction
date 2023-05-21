import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from './translations/en.json'
import cs from './translations/cs.json'

i18next.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        cs: { translation: cs }
    },
    lng: "cs",
    fallbackLng: "cs",
    interpolation: {
        escapeValue: false
    }
});

export default i18next;