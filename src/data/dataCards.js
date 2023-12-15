import { useTranslationHook } from "../hooks/useI18nTranslation";

export function GetCards() {
  const { t } = useTranslationHook();

  const dataCards = [
    {
      id: 1,
      url: "/assets/icons/transaction.svg",
      title: t("data.dataCards.card1.titulo"),
      text: t("data.dataCards.card1.texto")
    },
    {
      id: 2,
      url: "/assets/icons/services.svg",
      title: t("data.dataCards.card2.titulo"),
      text: t("data.dataCards.card2.texto")
    },
    {
      id: 3,
      url: "/assets/icons/assistance.svg",
      title: t("data.dataCards.card3.titulo"),
      text:t("data.dataCards.card3.texto")
    },
    {
      id: 4,
      url: "/assets/icons/efficiency.svg",
      title: t("data.dataCards.card4.titulo"),
      text: t("data.dataCards.card4.texto")
    }
  ];

  return dataCards;
}
