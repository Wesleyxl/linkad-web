export const validateToken = async (token: string): Promise<boolean | any> => {
  const invalidTokens = ["Unauthorized", "Token is Invalid", "Token not found"];

  if (invalidTokens.includes(token)) {
    await logout();
  }

  return true;
};

export const login = async (
  user: object,
  access_token: string
): Promise<void> => {
  localStorage.setItem("access_token", access_token);
  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = "/";
};

export const logout = async (): Promise<void> => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("user");

  window.location.href = "/";
};
