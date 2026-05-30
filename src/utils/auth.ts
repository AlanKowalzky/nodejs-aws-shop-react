export function getBasicAuthHeader() {
  const token = localStorage.getItem("authorization_token");

  return token ? { Authorization: `Basic ${token}` } : {};
}

export function getBearerAuthHeader() {
  const token =
    localStorage.getItem("cognito_token") ||
    localStorage.getItem("id_token") ||
    localStorage.getItem("access_token");

  return token ? { Authorization: `Bearer ${token}` } : {};
}
