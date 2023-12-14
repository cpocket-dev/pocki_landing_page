import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export function useTranslationHook() {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const lng = navigator.language;
        i18n.changeLanguage(lng);
    }, []);

    return { t, i18n };
}
