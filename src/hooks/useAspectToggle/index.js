import { useCallback, useState } from "react";

// constants
import { ASPECT_KEYS } from "constants/aspects";

export const useAspectToggle = (props) => {
  const { defaultValue } = props || {};

  const [aspectKey, setAspectKey] = useState(
    ASPECT_KEYS[defaultValue] || ASPECT_KEYS.card,
  );

  const onSetAspectKey = useCallback((value) => {
    setAspectKey((prev) => ASPECT_KEYS[value] || prev);
  }, []);

  return [aspectKey, onSetAspectKey];
};
