export interface LoginRequest {
    mobile: string;
    password: string;
  }
  
  interface ILogin {
    name: string;
    token: string;
  }
  
  export interface LoginResponse {
    login: ILogin;
  }
  
  export interface Token {
    accessToken: string;
  }
  