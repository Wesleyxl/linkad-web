import { type AxiosResponse } from "axios";

import { instancePublic } from "./methods";

export default {
  login: async (email: string, password: string) => {
    const response: AxiosResponse = await instancePublic
      .post("/auth/login", {
        email,
        password,
      })
      .then((response) => response.data)
      .catch((error) => error.response.data);

    return response;
  },

  me: async (access_token: string) => {
    const response: AxiosResponse = await instancePublic
      .get("/auth/me", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((response) => response.data)
      .catch((error) => error.response.data);

    return response;
  },
};
