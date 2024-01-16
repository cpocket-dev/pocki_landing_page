import { useTranslationHook } from "../hooks/useI18nTranslation";

export function GetArticles() {
  const { t } = useTranslationHook();

  const articles = [
    {
      id: 1,
      date: "26 Mayo, 2023",
      web: "El Espectador",
      info: "El emprendedor que con ChatGPT quiere revolucionar las transacciones",
      link: "https://www.elespectador.com/economia/emprendimiento-y-liderazgo/pocki-y-el-emprendedor-que-usando-chatgpt-quiere-revolucionar-las-transacciones/",
      imageLink: "https://i.postimg.cc/5ydGTbp6/Screenshot2024-01-16154528-ezgif-com-png-to-webp-converter.webp"
    },
    {
      id: 2,
      date: "28 Octubre, 2023",
      web: "Semana",
      info: "Elecciones 2023: ¿Qué beneficios tiene votar con la cédula digital este 29 de octubre?",
      link: "https://www.semana.com/tecnologia/articulo/elecciones-2023-que-beneficios-tiene-votar-con-la-cedula-digital-este-29-de-octubre/202326/",
      imageLink: "https://i.postimg.cc/nVBN79c7/Screenshot2024-01-16154533-ezgif-com-png-to-webp-converter.webp"
    },
    {
      id: 3,
      date: "5 Septiembre, 2023",
      web: "Mastek",
      info: "‘Pocki’ el asistente virtual anunciado por CapitalPocket",
      link: "https://www.mastekhw.com/noticias/pocki-el-asistente-virtual-anunciado-por-capitalpocket/",
      imageLink: "https://i.postimg.cc/BvzR5xK5/Screenshot2024-01-16154604-ezgif-com-png-to-webp-converter.webp"
    },
    {
      id: 4,
      date: "27 Octubre, 2023",
      web: "Xakata",
      info: "Cómo saber cuál es mi puesto de votación para este 29 de octubre usando WhatsApps",
      link: "https://www.xataka.com.co/aplicaciones/como-saber-cual-mi-puesto-votacion-para-este-29-octubre-usando-whatsapp",
      imageLink: "https://i.postimg.cc/TwWFtpVz/Screenshot2024-01-16154754-ezgif-com-png-to-webp-converter.webp"
    },
    {
      id: 5,
      date: "16 Septiembre, 2023",
      web: "Tendencia Digital",
      info: "«Pocki» el chatbot conectado a Chat GPT para hacer trámites en WhatsApp",
      link: "https://www.tendenciadigital.com.co/2023/09/04/pocki-el-chatbot-conectado-a-chat-gpt-para-tramites-en-whatsapp/",
      imageLink: "https://i.postimg.cc/hPn604fY/Screenshot2024-01-16154537-ezgif-com-png-to-webp-converter.webp"
    },
    {
      id: 6,
      date: "2 Septiembre, 2023",
      web: "Yahoo Finanzas",
      info: "Llega Pocki, el nuevo chatbot para transacciones y consultas en Colombia",
      link: "https://es-us.finanzas.yahoo.com/noticias/llega-pocki-chatbot-transacciones-consultas-140000787.html",
      imageLink: "https://i.postimg.cc/TwWFtpVz/Screenshot2024-01-16154754-ezgif-com-png-to-webp-converter.webp"
    },
    {
        id: 7,
        date: "17 Septiembre, 2023",
        web: "Colombia Fintech",
        info: "El asistente virtual, que a través de WhatsApp, revolucionará el día a día de los colombianos",
        link: "https://www.colombiafintech.co/lineaDeTiempo/articulo/el-asistente-virtual-que-a-traves-de-whatsapp-revolucionara-el-dia-a-dia-de-los-colombianos",
        imageLink: "https://i.postimg.cc/hPn604fY/Screenshot2024-01-16154537-ezgif-com-png-to-webp-converter.webp"
      }
  ];

  return articles;
}
