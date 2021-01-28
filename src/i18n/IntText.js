import { useTranslation } from "react-i18next";

const IntText = ({ text }) => {
  const { t } = useTranslation();
  return t(text);
};

export const IntInText = (text) => {
  const { t } = useTranslation();
  return t(text);
};

export default IntText;
