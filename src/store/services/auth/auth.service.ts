// import { Response } from '../type';
// import { LoginRequest, LoginResponse } from './auth.service.types';
// import { client as axiosClient } from '../client';
// import ToastPopUp from '@/utils/Toast.android';
// import { BASE_URL } from '@/utils/environment';

import { gql } from '@apollo/client';

// export const authService = {
//   login: async (loginRequest: LoginRequest): Promise<Response<LoginResponse>> => {
//     try {
//       const url: string = BASE_URL;
//       const response = await axiosClient.post(
//         url,
//         JSON.stringify({
//           query: `mutation($mobileNumber: String!, $password: String!) {
//          login(
//                 mobileNumber: $mobileNumber
//                 password: $password
//             )
//           {
//             user{
//                   fullName
//                 },
//             token
//           }
//         }`,
//           variables: {
//             mobileNumber: `${loginRequest.mobile}`,
//             password: `${loginRequest.password}`
//           }
//         })
//       );
//       // console.log('response service:', response);
//       return response?.data;
//     } catch (error) {
//       console.log('error:', error);
//       ToastPopUp('Sign In Failed. ');
//       throw error;
//     }
//   }
//   // logout: async (): Promise<Response<any>> => {
//   //   try {
//   //     const url: string = '/logout';
//   //     const response = await axiosClient.get(url);
//   //     return response?.data;
//   //   } catch (error) {
//   //     console.log('error:', error);
//   //     throw error;
//   //   }
//   // }x
// };

export const LOGIN_MUTATION = gql`
  mutation Login($mobileNumber: String!, $password: String!) {
    login(mobileNumber: $mobileNumber, password: $password) {
      user {
        id
        email
        gender
        birthday
      }
    }
  }
`;
