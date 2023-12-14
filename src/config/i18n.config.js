import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detectar el idioma del usuario
    // obtener más información: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pasar la instancia de i18n a react-i18next.
    .use(initReactI18next)
    // inicializar i18next
    // para todas las opciones, leer: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // no es necesario para react ya que escapa por defecto
        },
        resources: {
            en: {
                translation: {
                    // idioma ingles...
                }
            },
            es: {
                translation: {
                    // idioma español...
                }
            },
            fr: {
                translation: {
                    // idioma francés...
                }
            },
            de: {
                translation: {
                    // idioma alemán...
                }
            },
            it: {
                translation: {
                    // idioma italiano...
                }
            },
            pt: {
                translation: {
                    // idioma portugués...
                }
            }
        }
    });

export default i18n;