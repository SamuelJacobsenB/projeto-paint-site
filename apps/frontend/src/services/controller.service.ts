import { api } from ".";
import { Response } from "@core/types";

export class Controller {
  async get(url: string, access_token?: string): Promise<Response> {
    const response = await api.get(url, {
      headers: { Authorization: access_token },
    });

    if (response.status >= 400) {
      return { error: response.statusText };
    }

    return { data: response.data };
  }
}
