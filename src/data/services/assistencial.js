import { useTranslationHook } from "../../hooks/useI18nTranslation";

export function GetAssistencial() {
    const { t } = useTranslationHook();

    const assistencial = [
        {
            id: 1,
            icon: "icon example",
            title: "Pocki GPT",
            text: "Genera cualquier tipo de imagen, simplemente describiendo lo que necesitas.",
            link: "link example"
        },
        {
            id: 2,
            icon: "icon example",
            title: "Pocki Empleos",
            text: "encuentra ofertas de empleo en tu ciudad o en cualquier parte del mundo.",
            link: "link example"
        },
        {
            id: 3,
            icon: "icon example",
            title: "Pocki Multas",
            text: "consulta con la placa de tu vehículo si tienes multas a nivel nacional.",
            link: "link example"
        },
        {
            id: 4,
            icon: "icon example",
            title: "Pocki Academia",
            text: "Te ayuda a estudiar cualquier tema de forma interactiva.",
            link: "link example"
        },
        {
            id: 5,
            icon: "icon example",
            title: "Pocki Noticias",
            text: "Consulta las noticias más relevantes de tu ciudad o de cualquier parte del mundo.",
            link: "link example"
        },
        {
            id: 6,
            icon: "icon example",
            title: "Pocki Viajero",
            text: "Encuentra los mejores precios y disponibilidad de vuelos y hoteles.",
            link: "link example"
        },
        /* {
            id: 7,
            icon: "icon example",
            title: "Pocki Redacta",
            text: "text example",
            link: "link example"
        }, */
        {
            id: 8,
            icon: "icon example",
            title: "Pocki Editor de Fotos",
            text: "Edita tus fotos de forma profesional y con diferentes estilos.",
            link: "link example"
        },
        {
            id: 9,
            icon: "icon example",
            title: "Recordatorios",
            text: "Recibe recordatorios de tus eventos importantes.",
            link: "link example"
        },
        {
            id: 10,
            icon: "icon example",
            title: "Inmobiliario",
            text: "Encuentra las mejores ofertas de inmuebles en tu ciudad o a nivel nacional.",
            link: "link example"
        }
    ];

    return assistencial;
}