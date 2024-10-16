export interface LoginRequest {
  mobile: string;
  password: string;
}

export interface LoginResponse {
  user: {
    fullName: string;
    email: string;
  };
  accessToken: string;
}

export interface Token {
  accessToken: string;
}
