import { gql } from "@apollo/client";

export const UPLOAD_PRESCRIPTION_MUTATION = gql`
  mutation UploadPrescription($prescriptionInput: PrescriptionDto!) {
    uploadPrescription(prescriptionInput: $prescriptionInput) {
      id
      filePath
      error {
        message
        code
      }
    }
  }
`;
