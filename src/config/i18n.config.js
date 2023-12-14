import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Lenguajes (Languages)
import esTranslation from '../../public/locales/es/es.json'; // Importar traducciones en español
import enTranslation from '../../public/locales/en/en.json'; // Importar traducciones en inglés
import frTranslation from '../../public/locales/fr/fr.json'; // Importar traducciones en francés
import deTranslation from '../../public/locales/de/de.json'; // Importar traducciones en alemán
import itTranslation from '../../public/locales/it/it.json'; // Importar traducciones en italiano
import ptTranslation from '../../public/locales/pt/pt.json'; // Importar traducciones en portugués

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true, // Habilitar el modo de depuración
        fallbackLng: 'en', // Idioma de respaldo si no se encuentra una traducción
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: enTranslation,
            },
            es: {   
                translation: esTranslation,
            },
            fr: {
                translation: frTranslation,
            },
            de: {
                translation: deTranslation,
            },
            it: {
                translation: itTranslation,
            },
            pt: {
                translation: ptTranslation,
            },
        },
    });

export default i18n;