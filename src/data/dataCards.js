import { useTranslationHook } from "../hooks/useI18nTranslation";

export function GetCards() {
  const { t } = useTranslationHook();

  const dataCards = [
    {
      id: 1,
      serviceImage: "TransactionImage",
      serviceBg: "TransactionBg",
      title: t("data.dataCards.card1.titulo"),
      text: t("data.dataCards.card1.texto")
    },
    {
      id: 2,
      serviceImage: "CommercialImage",
      serviceBg: "CommercialBg",
      title: t("data.dataCards.card2.titulo"),
      text: t("data.dataCards.card2.texto")
    },
    {
      id: 3,
      serviceImage: "AssistanceImage",
      serviceBg: "AssistanceBg",
      title: t("data.dataCards.card3.titulo"),
      text:t("data.dataCards.card3.texto")
    },
    {
      id: 4,
      serviceImage: "EfficiencyImage",
      serviceBg: "EfficiencyBg",
      title: t("data.dataCards.card4.titulo"),
      text: t("data.dataCards.card4.texto")
    }
  ];

  return dataCards;
}
