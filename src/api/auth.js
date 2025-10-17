// utils
import { api } from "utils/api";

export const postAuthSignInAPI = async (data) => {
  return await api.post("auth/signIn", { data });
};

export const postAuthSignUpAPI = async (data) => {
  return await api.post("auth/signUp", { data });
};
