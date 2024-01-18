import { useTranslationHook } from "../../hooks/useI18nTranslation";

export function GetCommercial() {
    const { t } = useTranslationHook();

    const commercial = [
        {
            id: 1, 
            img: "/assets/card-img1.webp",
            title: "Exhibicion y Venta de Productos y Servicios", 
            text: t("data.commercial.card1.texto"),
            link: ""
        },
        {
            id: 2, 
            img: "/assets/card-img2.webp",
            title: "Agendamientos y Confirmacion de Citas", 
            text: t("data.commercial.card2.texto"), 
            link: ""
        },
        {
            id: 3, 
            img: "/assets/card-img1.webp",
            title: "Informes Automatizados para Descarga", 
            text: t("data.commercial.card3.texto"),
        },
        {
            id: 4, 
            img: "/assets/card-img2.webp",
            title: "Comunicacion con Clientes y Publico Potencial", 
            text: t("data.commercial.card4.texto"), 
        },
        {
            id: 5, 
            img: "/assets/card-img1.webp",
            title: "Campañas Especiales", 
            text: t("data.commercial.card5.texto"), 
        },
        {
            id: 6, 
            img: "/assets/card-img1.webp",
            title: "Opreaciones de Eficiencia Internas y Externas", 
            text: t("data.commercial.card5.texto"), 
        }
    ];

    return commercial;
}