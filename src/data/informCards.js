import { useTranslationHook } from "../hooks/useI18nTranslation";

export function GetInfo() {
    const { t } = useTranslationHook();

    const informCards = [
        {
            id: 1, 
            icon: "dollar", 
            background: "/assets/card-bg1.webp",
            img: "/assets/card-img1.webp",
            title: t("data.informCards.card1.titulo"), 
            text: t("data.informCards.card1.texto"), 
            first: "0.60%", 
            second: "USD",
            link: ""
        },
        {
            id: 2, 
            icon: "euro", 
            background: "/assets/card-bg2.webp",
            img: "/assets/card-img2.webp",
            title: t("data.informCards.card2.titulo"), 
            text: t("data.informCards.card2.texto"),  
            first: "0.95%", 
            second: "EUR",
            link: ""
        },
        {
            id: 3, 
            icon: "credit-card", 
            background: "/assets/card-bg1.webp",
            img: "/assets/card-img1.webp",
            title: t("data.informCards.card3.titulo"), 
            text: t("data.informCards.card3.texto"), 
            first: "1.25%", 
            second: "USD",
            link: "https://wa.link/tqw2ey"
        },
        {
            id: 4, 
            icon: "shopping-cart", 
            background: "/assets/card-bg2.webp",
            img: "/assets/card-img2.webp",
            title: t("data.informCards.card4.titulo"), 
            text: t("data.informCards.card4.texto"),  
            first: "0.75%", 
            second: "USD",
            link: ""
        },
        {
            id: 5, 
            icon: "gift", 
            background: "/assets/card-bg1.webp",
            img: "/assets/card-img1.webp",
            title: t("data.informCards.card5.titulo"), 
            text: t("data.informCards.card5.texto"),  
            first: "0.50%", 
            second: "USD",
            link: ""
        }
    ];

    return informCards;
}