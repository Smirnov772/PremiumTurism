// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Импорт переводов
import enTranslations from './locales/en/translations.json';
import ruTranslations from './locales/ru/translations.json';
import arTranslations from './locales/ar/translations.json'; // Добавляем арабский

const resources = {
	en: {
		translation: enTranslations,
	},
	ru: {
		translation: ruTranslations,
	},
	ar: { // Добавляем ресурсы для арабского
		translation: arTranslations,
	},
};

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
	resources,
	fallbackLng: 'ru',
	supportedLngs: ['en', 'ru', 'ar'], // Добавляем 'ar'
	detection: {
		order: ['navigator', 'cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
		caches: ['cookie', 'localStorage'],
	},
	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
