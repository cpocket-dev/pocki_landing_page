/* import { useTranslationHook } from "../hooks/useI18nTranslation"; */

export function GetInfo() {
    /* const { t } = useTranslationHook(); */

    const informCards = [
        {
            id: 1, 
            icon: "dollar", 
            background: "/assets/card-bg1.webp",
            img: "/assets/card-img1.webp",
            title: "Servicios públicos", 
            text: "Solo necesitarás foto del código de barras o referencia de pago de tu factura de servicios públicos", 
            first: "0.60%", 
            second: "USD",
            link: ""
        },
        {
            id: 2, 
            icon: "euro", 
            background: "/assets/card-bg2.webp",
            img: "/assets/card-img2.webp",
            title: "Compra de pines", 
            text: "Podrás escoger entre una gran variedad de pines que tenemos para tí", 
            first: "0.95%", 
            second: "EUR",
            link: ""
        },
        {
            id: 3, 
            icon: "credit-card", 
            background: "/assets/card-bg1.webp",
            img: "/assets/card-img1.webp",
            title: "Recargas Móviles", 
            text: "Recarga fácilmente tu celular en cualquier momento y lugar que desees.", 
            first: "1.25%", 
            second: "USD",
            link: "https://wa.link/tqw2ey"
        },
        {
            id: 4, 
            icon: "shopping-cart", 
            background: "/assets/card-bg2.webp",
            img: "/assets/card-img2.webp",
            title: "Compras en línea", 
            text: "Realiza compras seguras en línea con nuestras tarjetas virtuales", 
            first: "0.75%", 
            second: "USD",
            link: ""
        },
        {
            id: 5, 
            icon: "gift", 
            background: "/assets/card-bg1.webp",
            img: "/assets/card-img1.webp",
            title: "Envío de dinero", 
            text: "Envía dinero a tus seres queridos de forma rápida y segura", 
            first: "0.50%", 
            second: "USD",
            link: ""
        }
    ];

    return informCards;
}