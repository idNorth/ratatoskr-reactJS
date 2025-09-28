import { useCallback } from "react";
import { useParams } from "react-router-dom";

export const useAppUrl = () => {
  const { language } = useParams();

  const getUrl = useCallback(
    ({ lang, path }) => {
      return `/${lang || language}/${path}`;
    },
    [language],
  );

  return { getUrl };
};
