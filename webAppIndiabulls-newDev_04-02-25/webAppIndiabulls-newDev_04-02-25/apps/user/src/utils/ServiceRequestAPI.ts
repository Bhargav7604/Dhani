import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { addToaster } from "../modules/layout/state-slice/ToasterSlice";
import { store } from "../store/Store";
import { setServerError } from "../components/errorcomponents/state-slice/ServerErrorSlice";
import { SESSION_URL_API } from "../services/AppEndpoints";

export interface RequestConfig {
  params?: Record<string, any>;
  payload?: Record<string, any>;
  headers?: Record<string, string>;
  options?: AxiosRequestConfig;
}

export class ServiceRequest {
  private static getSessionTokens(): Record<string, string> {
    const token = sessionStorage.getItem("token") || "";
    const otpSessionId = sessionStorage.getItem("otpSessionId") || "";
    const mobileNumber = sessionStorage.getItem("mobileNumber") || "";
    const clientId = sessionStorage.getItem("clientId") || "";

    return {
      token,
      otpSessionId,
      mobileNumber,
      clientId,
    };
  }

  private static handleError(error: any): void {
    if (!error.response) {
      store.dispatch(setServerError(true));
      const toasterPayload = {
        id: Date.now(),
        status: false,
        message: "Network Failed: Unable To Connect Server",
        duration: 3000,
      };
      store.dispatch(addToaster(toasterPayload));
    } else if (error?.response?.status === 403 || 500 || 502) {
      const toasterPayload = {
        id: Date.now(),
        status: false,
        message: error.response.data.message,
        duration: 3000,
      };
      store.dispatch(addToaster(toasterPayload));
    } else if (
      error?.response?.data?.errorCode ||
      error?.response?.status === 401
    ) {
     
      sessionStorage.clear();
      window.parent.postMessage("SESSION_EXPIRED", SESSION_URL_API);
    }
  }
 

  private static handleSuccess(response?: any): void {
    store.dispatch(
      addToaster({
        id: Date.now(),
        status: true,
        message: response.data.message || "Request was successful!",
        duration: 3000,
      })
    );
  }

  static async get<T>(url: string, config?: AxiosRequestConfig): Promise<any> {
    try {
      const cookies = this.getSessionTokens();
      const response: AxiosResponse<T> = await axios.get(url, {
        params: config?.params ? config.params : undefined,
        headers: {
          ...config?.headers,
          ...cookies,
        },
      });

      return response.data;
    } catch (error: any) {
      this.handleError(error);
      throw error;
    }
  }

  static async post<T>(url: string, config: RequestConfig): Promise<T> {
    try {
      const cookies = this.getSessionTokens();
      const requestConfig: AxiosRequestConfig = {
        params: config?.params || {},
        headers: { ...config?.headers, ...cookies },
        ...config.options,
      };

      const response: AxiosResponse<T> = await axios.post(
        url,
        config?.payload || {},
        requestConfig
      );
      this.handleSuccess(response);
      return response.data;
    } catch (error: any) {
      this.handleError(error);
      throw error;
    }
  }

  static async put<T>(url: string, config: RequestConfig): Promise<any> {
    try {
      const response: AxiosResponse<T> = await axios.put(url, config.payload);
      this.handleSuccess("Operation successful!");
      return response.data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        throw err;
      }
      this.handleError(err);
    }
  }
}
