import { gql } from '@apollo/client';

export const CREATE_ACCOUNT_MUTATION = gql`
  mutation RegisterUser($registerInput: RegisterDto!) {
    register(registerInput: $registerInput) {
      user {
        id
        fullName
        email
        mobileNumber
        gender
        birthday
      }
      error {
        message
        code
      }
    }
  }
`;
