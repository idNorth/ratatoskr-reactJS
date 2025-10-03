import { useCallback, useState } from "react";

// constants
import { CONTENT_VIEW_KEYS } from "constants/contentView";

export const useContentViewToggle = (props) => {
  const { defaultValue } = props || {};

  const [viewKey, setViewKey] = useState(
    CONTENT_VIEW_KEYS[defaultValue] || CONTENT_VIEW_KEYS.card,
  );

  const onSetViewKey = useCallback((value) => {
    setViewKey((prev) => CONTENT_VIEW_KEYS[value] || prev);
  }, []);

  return [viewKey, onSetViewKey];
};
