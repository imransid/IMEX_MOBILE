import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($mobileNumber: String!, $password: String!) {
    login(mobileNumber: $mobileNumber, password: $password) {
      accessToken
      user {
        fullName
      }
    }
  }
`;
