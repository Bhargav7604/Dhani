import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { addToaster } from "../modules/layout/state-slice/ToasterSlice";
import store from "../store/Store";
import { setServerError } from "../components/errorcomponents/state-slice/ServerErrorSlice";

interface RequestConfig {
  params?: Record<string, unknown>;
  payload?: Record<string, unknown>;
  headers?: Record<string, string>;
  options?: AxiosRequestConfig;
}

export class ServiceRequest {
  //  private static getSessionTokens(): Record<string, string> {
  
  //   const token = sessionStorage.getItem("token") || "";
  //   // const otpSessionId = sessionStorage.getItem("otpSessionId") || "";
  //   // const mobileNumber = sessionStorage.getItem("mobileNumber") || "";
  //   // const clientId = sessionStorage.getItem("clientId") || "";

  //   return {
  //     token,
  //     // otpSessionId,
  //     // mobileNumber,
  //     // clientId,
  //   };
  // }
  // private static handleError(error: any): void {
  //   if (!error.response) {
  //     store.dispatch(setServerError(true));
  //     const toasterPayload = {
  //       id: Date.now(),
  //       status: false,
  //       message: "Network Failed: Unable To Connect Server",
  //       duration: 1000,
  //     };
  //     store.dispatch(addToaster(toasterPayload));
  //   } else if (error?.response?.status === 403 || 500 || 502) {
  //     const toasterPayload = {
  //       id: Date.now(),
  //       status: false,
  //       message: error.response?.data.message,
  //       duration: 1000,
  //     };
  //     store.dispatch(addToaster(toasterPayload));
  //   } else if (
  //     error?.response?.data?.errorCode ||
  //     error?.response?.status === 401
  //   ) {

  //     sessionStorage.clear();
  //     window.parent.postMessage("SESSION_EXPIRED", );
  //   }
  // }
  private static handleError(error: any): void {
    if (!error.response) {
      store.dispatch(setServerError(true));
      const toasterPayload = {
        id: Date.now(),
        status: false,
        message: "Network Failed: Unable To Connect Server",
        duration: 1000,
      };
      store.dispatch(addToaster(toasterPayload));
    } else if ([403, 500, 502].includes(error?.response?.status)) {
      const toasterPayload = {
        id: Date.now(),
        status: false,
        message: error.response.data.message || "Something went wrong",
        duration: 1000,
      };
      store.dispatch(addToaster(toasterPayload));
    } else if (
      error?.response?.data?.errorCode ||
      error?.response?.status === 401
    ) {
      sessionStorage.clear();
      window.parent.postMessage("SESSION_EXPIRED");
    }
  }

  private static handleSuccess(response?: any): void {
    store.dispatch(
      addToaster({
        id: Date.now(),
        status: true,
        message: response?.data.message || "Request was successful!",
        duration: 1000,
      })
    );
  }

  // GET Request
  static async get<T>(url: string, config?: AxiosRequestConfig): Promise<any> {
    try {
      const JWTToken = await Promise.resolve(sessionStorage.getItem("token"));

      const response: AxiosResponse<T> = await axios.get(url, {
        params: config?.params ? config.params : undefined,
        headers: {
          ...config?.headers,
          Authorization: `Bearer ${JWTToken}`,
        },
      });
      return response.data;
    } catch (error: any) {
      this.handleError(error);
      throw error;
    }
  }

  // POST Request
  static async post<T>(url: string, config: RequestConfig): Promise<any> {
    try {
      // const requestConfig: AxiosRequestConfig = config?.params
      //   ? { params: config.params }
      //   : {};
      const JWTToken = await Promise.resolve(sessionStorage.getItem("token"));

      const requestConfig: AxiosRequestConfig = {
        params: config?.params || {},
        headers: {
          ...config?.headers,
          ...(JWTToken && { Authorization: `Bearer ${JWTToken}` }),
        },
      };
      const response: AxiosResponse<T> = await axios.post(
        url,
        config.payload,
        requestConfig
      );
      this.handleSuccess(response);
      return response.data;
    } catch (error: unknown) {
      this.handleError(error);
      throw error;
    }
  }

  // PUT Request
  static async put<T>(url: string, config: RequestConfig): Promise<T | null> {
    try {
      const axiosConfig: AxiosRequestConfig = {
        params: config.params, // Include query params if any
      };
      const response: AxiosResponse<T> = await axios.put(
        url,
        config.payload,
        axiosConfig
      );
      return response.data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        console.error("Axios error:", err.message);
      } else {
        console.error("An unknown error occurred");
      }
      return null; // Return null if an error occurs
    }
  }

  // Delete Request
  static async delete<T>(url: string, config: RequestConfig): Promise<any> {
    try {
      const requestConfig: AxiosRequestConfig = config?.params
        ? { params: config.params }
        : {};
      const response: AxiosResponse<T> = await axios.post(
        url,
        config.payload,
        requestConfig
      );

      return response.data;
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        console.log(err.message);
      } else {
        // console.log("An unknown error occurred");
      }
    }
  }
}
