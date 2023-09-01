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
      .catch((error) => error);

    return response;
  },
};
