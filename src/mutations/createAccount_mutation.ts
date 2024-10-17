import { gql } from '@apollo/client';

export const CREATE_ACCOUNT_MUTATION = gql`
  mutation RegisterUser($registerInput: RegisterDto!) {
    register(registerInput: $registerInput) {
      error {
        message
        code
      }
    }
  }
`;

// import { gql } from '@apollo/client';

// export const CREATE_ACCOUNT_MUTATION = gql`
//   mutation Register($registerInput: RegisterInput!) {
//     register(registerInput: $registerInput) {
//       message
//     }
//   }
// `;
