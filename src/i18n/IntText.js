import { useTranslation } from "react-i18next";

const IntText = ({ text }) => {
  const { t } = useTranslation();
  return t(text);
};

export const IntInText = (text) => {
  const { t } = useTranslation();
  return t(text);
};

export const GetLang = () => {
  const { i18n } = useTranslation();
  return i18n.language;
};

export default IntText;
