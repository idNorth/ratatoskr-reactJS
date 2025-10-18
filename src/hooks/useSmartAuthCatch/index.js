import { useContext } from "react";

// utils
import { smartAuthContext } from "layouts/Providers/providers/SmartAuth/utils/context";

export const useSmartAuthCatch = () => useContext(smartAuthContext);
