export const getCookie = (name) => {
  const cookies = document.cookie.split("; ").map((c) => c.split("="));
  const elem = cookies.find(([k]) => k === name);
  return elem ? decodeURIComponent(elem[1]) : null;
};
