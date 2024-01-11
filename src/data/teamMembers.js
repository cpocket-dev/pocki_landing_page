import { useTranslationHook } from "../hooks/useI18nTranslation";

export function getLeaders() {
    const { t } = useTranslationHook();

    const teamLeaders = [
        {
            id: 1,
            img: "https://i.postimg.cc/SRDn27Dm/Lina.webp",
            role: "Co-Founder",
            name: "Lina Maria Otalvaro"
        },
        {
            id: 2,
            img: "https://i.postimg.cc/J7qD2MmS/Alexis.webp",
            role: "CEO",
            name: "Alexis Aronategui"
        },
        {
            id: 3,
            img: "https://i.postimg.cc/tJX14mdr/Walter.webp",
            role: "CTO",
            name: "Walter Vanegas"
        },
        
    ];

    return teamLeaders;
}