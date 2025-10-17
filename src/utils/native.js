export const isString = (str) => typeof str === "string";

export const isObject = (obj) => {
  return !!obj && !Array.isArray(obj) && typeof obj === "object";
};
