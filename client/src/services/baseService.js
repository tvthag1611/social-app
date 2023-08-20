import axios from "axios";
import { clearLocalStorage } from "../utils/index.js";

class BaseServices {
  baseURL;
  http;
  configHeaders;

  constructor(configHeaders) {
    this.http = axios.create({
      baseURL: "http://localhost:8000/api/v1/",
    });
    this.baseURL = "http://localhost:8000/api/v1/";
    this.configHeaders = configHeaders;
    this.http.interceptors.response.use(
      (response) => response,
      (error) => {
        const { response } = error;
        if (response) {
          switch (response.status) {
            case 401:
              clearLocalStorage();
              window.location.reload();
              return;
            case 403:
              window.location.href = "/error403";
              return;
            default:
              return Promise.reject(error);
          }
        }
        return Promise.reject(error);
      }
    );
  }

  setConfigHeaders() {
    const token = localStorage.get("token") || "";
    const config = {
      headers: {
        "content-type": "application/json",
        "x-access-token": `Bearer ${token}`,
      },
      ...this.configHeaders,
    };
    return config;
  }

  get(url, configHeaders) {
    return this.http.get(url, { ...this.setConfigHeaders(), ...configHeaders });
  }

  post(url, data, configHeaders) {
    return this.http.post(url, data, {
      ...this.setConfigHeaders(),
      ...configHeaders,
    });
  }

  put(url, data, configHeaders) {
    return this.http.put(url, data, {
      ...this.setConfigHeaders(),
      ...configHeaders,
    });
  }

  delete(url, configHeaders) {
    return this.http.delete(url, {
      ...this.setConfigHeaders(),
      ...configHeaders,
    });
  }
}

export default BaseServices;
