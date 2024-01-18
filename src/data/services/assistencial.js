import { useTranslationHook } from "../../hooks/useI18nTranslation";

export function GetAssistencial() {
    const { t } = useTranslationHook();

    const assistencial = [
        {
            id: 1,
            icon: "Consultation",
            title: "¡Pocki te responde!",
            text: "Gracias a nuestra conexión con chat GPT, Pocki tiene la capacidad de realizar búsquedas, consultas y resolver preguntas que se encuentren en contextos generales y específicos, en similitud con lo que un usuario podría preguntarle a google pues a través de la conexión a internet podremos suministrar la información, es importante que conozcan que los usuarios de Pocki comúnmente realizan consultas académicas, culturales, y de consejería... ",
            link: "VideoTest"
        },
        {
            id: 2,
            icon: "Work",
            title: "¡Pocki Empleo!",
            text: "ayudaremos a encontrar ofertas de empleo a través de WhatsApp, los usuarios podrán encontrar empleos que adapten a su profesión, rango salarial y ubicación por lo tanto las personas podrían preguntar:  ``Pocki, ayúdame a encontrar vacantes para abogada en la ciudad de Medellin.`` y Pocki traerá en el chat las ofertas que se encuentren en las bolsas de empleo o en google.",
            link: "VideoTest"
        },
        {
            id: 3,
            icon: "Warning",
            title: "¡Pocki consulta multas!",
            text: "Este servicio se encuentra conectado con SIMMIT el cual permite conocer por placa o numero de identificación  concepto de multas, fotodetecciones e infracciones en los Organismo de Tránsito conectados a Simit en cualquier municipio de Colombia.",
            link: "VideoTest"
        },
        {
            id: 4,
            icon: "News",
            title: "¡Pocki Noticias!",
            text: "los usuarios podrán conocer la información de los principales medios periodísticos del mundo, podrían recibir las noticias diarias de determinado tema, ``pocki cuéntame que noticias hay hoy sobre el cambio climático`` ``Pocki puedes enviarme noticias sobre el cambio migratorio de Miami`` “Pocki cuales son las noticias del diario la república en panama... etc. ",
            link: "VideoTest"
        },
        {
            id: 5,
            icon: "Document2",
            title: "¡Pocki Resumen!",
            text: "Podrás enviarle documentos en pdf y word para que pocki interprete y te haga un resumen de la información, podrás solicitarle también que te lo envíe en nota de voz en WhatsApp. ",
            link: "VideoTest"
        },
        {
            id: 6,
            icon: "Document",
            title: "¡Pocki te redacta!",
            text: "Enfocado para las personas que tienen que redactar un correo electrónico y se encuentran conduciendo un vehiculo o están muy ocupados, con una nota de voz contándole a pocki el mensaje que se enviará,  este lo volverá texto y lo enviará al correo que el usuario indique, asi mismo podrá adjuntarse archivos,este email será un dominio de C-Pocket. ejemplo: ``¡Pocki énviales un Correo angelica que diga: Angelica la parrilla numero 4 esta lista para c pocket por favor aprobar``",
            link: "VideoTest"
        },
        {
            id: 7,
            icon: "Travel",
            title: "¡Pocki viajero!",
            text: "Enfocado para las personas que quieren consultar vuelos, planes o paquetes turísticos. ",
            link: "VideoTest"
        },
        {
            id: 8,
            icon: "Photo",
            title: "¡Pocki editor de fotos!",
            text: "podras quitar el fondo de tus imágenes con pocki, simplemente énviales la foto y cuéntale que quieres hacer.",
            link: "VideoTest"
        },
        {
            id: 9,
            icon: "Stars",
            title: "¡Pocki Crea imágenes con IA!",
            text: "deja volar tu imaginación o trata de plasmar tus ideas de una manera rápida y fácil, escribe a pocki como quieres la imagen y el te enviará tus propuestas.",
            link: "VideoTest"
        },
        {
            id: 10,
            icon: "Home",
            title: "¡Pocki te ayuda a encontrar la propiedad de tus sueños!",
            text: "Este servicio esta enfocado para inmobiliarias y personas que quieran buscar propiedades, desde la comodidad de whatsapp las inmobiliarias podrán exponer sus propiedades sin costos de vinculación y permanencia para que en tiempo real puedan recibir leads de personas interesadas en compra o alquiler. Asi mismo una persona puede encontrar propiedades sin navegar en infinitas paginas webs ni descargar apss de inmobiliarias determinadas.",
            link: "https://streamable.com/wvb3di"
        },
        {
            id: 11,
            icon: "Clock",
            title: "¡Pocki Recordatorios!",
            text: "Pocki te recordará cada una de las actividades que programes con el, solo indicale que quieres recordar, la fecha y la hora y el te enviara un mensaje en la app, que estamos seguros no ignoras, WhatsApp. ",
            link: "VideoTest"
        },
        {
            id: 12,
            icon: "Vote",
            title: "¡Pocki consulta puesto de votación!",
            text: "Este servicio te permite encontrar tu puesto de votación, simplemente digitando tu numero de cedula, pocki te dirá la mesa y el lugar donde debes votar.",
            link: "VideoTest"
        },
    ];

    return assistencial;
}
