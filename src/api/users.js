// utils
import { api } from "utils/api";

export const getUsersAPI = async () => {
  return await api.get("users");
};
