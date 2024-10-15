import { Response } from "../type";
import { LoginRequest, LoginResponse } from "./auth.service.types";
import { client as axiosClient, BASE_URL } from "../client";
import ToastPopUp from "@/utils/Toast.android";

export const authService = {
  login: async (
    loginRequest: LoginRequest
  ): Promise<Response<LoginResponse>> => {
    try {
      const url: string = BASE_URL;
      const response = await axiosClient.post(
        url,
        JSON.stringify({
          query: `mutation($mobileNumber: String!, $password: String!) {
         login(
            data: {
                mobileNumber: $email
                password: $password
              }
            )
          {
            name,
            token
          }
        }`,
          variables: {
            mobileNumber: `${loginRequest.mobileNumber}`,
            password: `${loginRequest.password}`,
          },
        })
      );
      // console.log('response service:', response);
      return response?.data;
    } catch (error) {
      console.log("error:", error);
      ToastPopUp('Sign In Failed. ');
      throw error;
    }
  },
  logout: async (): Promise<Response<any>> => {
    try {
      const url: string = "/logout";
      const response = await axiosClient.get(url);
      return response?.data;
    } catch (error) {
      console.log("error:", error);
      throw error;
    }
  },
};
