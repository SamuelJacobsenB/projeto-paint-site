import { api } from ".";
import { Response } from "@core/types";

export class Controller {
  async get(url: string, access_token?: string): Promise<Response> {
    try {
      const response = await api.get(url, {
        headers: { Authorization: access_token },
      });

      if (response.status >= 400) {
        return { error: response.statusText };
      }

      return { data: response.data };
    } catch (error: any) {
      return { error: error.message };
    }
  }

  async post<DataType>(
    url: string,
    data?: DataType,
    access_token?: string
  ): Promise<Response> {
    try {
      const response = await api.post(url, data, {
        headers: { Authorization: access_token },
      });

      if (response.status >= 400) {
        return { error: response.statusText };
      }

      return { data: response.data };
    } catch (error: any) {
      return { error: error.message };
    }
  }

  async patch<DataType>(
    url: string,
    data?: DataType,
    access_token?: string
  ): Promise<Response> {
    try {
      const response = await api.patch(url, data, {
        headers: { Authorization: access_token },
      });

      if (response.status >= 400) {
        return { error: response.statusText };
      }

      return { data: response.data };
    } catch (error: any) {
      return { error: error.message };
    }
  }

  async delete(url: string, access_token?: string): Promise<Response> {
    try {
      const response = await api.delete(url, {
        headers: { Authorization: access_token },
      });

      if (response.status >= 400) {
        return { error: response.statusText };
      }

      return { data: response.data };
    } catch (error: any) {
      return { error: error.message };
    }
  }
}
