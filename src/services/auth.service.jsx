import api from "./api";
import { setToken, removeToken } from "../utils/storage";

export const login = async ({ email, senha }) => {
  const response = await api.post("/auth/authenticate", { email, senha });
  setToken(response.data.token);
  return response.data;
};

export const register = async ({ email, senha, nome }) => {
  const response = await api.post("/users", {
    nomeDeUsuario: email.split("@")[0],
    email,
    senha,
    nomeCompleto: nome,
  });
  return response.data;
};

export const logout = () => {
  removeToken();
  window.location.href = "/";
};
