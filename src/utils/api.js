// utils
import { isObject } from "utils/native";

class Api {
  getUrlParams(url, params) {
    if (!params) return url;
    const values = [];

    for (const [key, value] of Object.entries(params)) {
      const param = isObject(value) ? JSON.stringify(value) : value;

      if (!["", null].includes(param)) {
        values.push(`${key}=${encodeURIComponent(param)}`);
      }
    }

    if (values?.length) url += `?${values.join("&")}`;
    return url;
  }

  getUrlBody(options) {
    const { data, ...request } = options;
    if (isObject(data)) {
      request.headers = {
        ...request.headers,
        "content-type": "application/json",
      };
      request.body = JSON.stringify(data);
    } else request.body = data;

    return request;
  }

  async responseHnadler(response) {
    if (response.status === 204) {
      response.data = Object.freeze({});
    } else if (response.headers.get("content-type")?.includes("json")) {
      const json = await response.json();
      if (!response.ok) response.error = json.error;
      else {
        response.data = "data" in json ? json.data : json;
      }
    }

    return response;
  }

  getUrl(url, options) {
    const { params } = options;
    return `http://localhost:3001/api/${this.getUrlParams(url, params)}`;
  }

  async fetch(url, options) {
    const url1 = this.getUrl(url, options);
    const options1 = this.getUrlBody(options);
    const response = await fetch(url1, options1);
    return this.responseHnadler(response);
  }

  get(url, options) {
    return this.fetch(url, { ...options });
  }

  post(url, options) {
    return this.fetch(url, { ...options, method: "POST" });
  }

  put(url, options) {
    return this.fetch(url, { ...options, method: "PUT" });
  }

  delete(url, options) {
    return this.fetch(url, { ...options, method: "DELETE" });
  }
}

export const api = new Api();
