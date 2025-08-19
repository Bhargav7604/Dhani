export interface ServiceResponseType<T> {
    data: T;
    message: string;
    errors: string;
    success: string | boolean;
    status: string;
  }
  