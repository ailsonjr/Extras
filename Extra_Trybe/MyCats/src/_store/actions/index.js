import Login from "../../components/Login";

export function login(nome) {
  return ({
    type: Login,
    username: nome,
  });
}
