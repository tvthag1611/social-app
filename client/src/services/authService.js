import BaseServices from "./baseService.js";

class AuthService extends BaseServices {
  login = (data) => {
    return this.http.post("auth/login", data).then((response) => response.data);
  };
}

export default AuthService;
