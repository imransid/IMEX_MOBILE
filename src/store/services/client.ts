import axios, {
    AxiosError,
    AxiosRequestConfig,
    AxiosRequestHeaders,
    AxiosResponse,
    InternalAxiosRequestConfig,
  } from "axios";
  import { StoreStateType } from "../store.type";
  import { store } from "../store";
  
  type RequestFunc = (config: AxiosRequestConfig) => Promise<AxiosResponse>;
  export const BASE_URL = "http://18.220.136.226:4001/graphql";
  
  export const createAuthInterceptor = (): RequestFunc => {
    const state = store.getState() as StoreStateType;
    const token = state.login?.user?.login?.token;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    } as AxiosRequestHeaders;
    console.log("Auth interceptor headers", headers);
  
    const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
      return { ...config, headers };
    };
  
    return (config: AxiosRequestConfig): Promise<AxiosResponse> => {
      return axios.request(onRequest(config)).catch((error: AxiosError) => {
        // Handle error
        return Promise.reject(error);
      });
    };
  };
  
  const client = axios.create({
    baseURL: "http://18.220.136.226:4001/graphql",
    timeout: 5 * 60000,
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  client.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    if (config?.headers) {
      const state = store.getState() as StoreStateType;
      const token = state.login?.user?.login?.token;
      config.headers["Authorization"] = `Bearer ${token}` || "";
    }
    return config;
  });
  
  const formDataClient = axios.create({
    baseURL: "http://18.220.136.226:4001/graphql",
    timeout: 5 * 60000,
    headers: {
      "Content-Type":
        "multipart/form-data; boundary=--------------------------700715399828023233426788",
      "Apollo-Require-Preflight": "true",
    },
  });
  
  formDataClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      if (config?.headers) {
        const state = store.getState() as StoreStateType;
        const token = state.login?.user?.login?.token;
        config.headers["Authorization"] = `Bearer ${token}` || "";
      }
      return config;
    }
  );
  
  export { client, formDataClient };
  