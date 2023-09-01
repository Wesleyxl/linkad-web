/**
 * Validates a token.
 *
 * @param {string} token - The token to be validated.
 * @return {Promise<boolean>} A boolean indicating whether the token is valid.
 */
export const validateToken = async (token: string): Promise<boolean | any> => {
  const invalidTokens = ["Unauthorized", "Token is Invalid", "Token not found"];

  if (invalidTokens.includes(token)) {
    await logout();
  }

  return true;
};

export const logout = async (): Promise<void> => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("user");

  window.location.href = "/";
};
