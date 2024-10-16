import { gql } from "@apollo/client";

export const PRESCRIPTION_MUTATION = gql`
  mutation AddPrescription($prescriptionInput: PrescriptionInput!) {
    addPrescription(prescriptionInput: $prescriptionInput) {
      id
      filePath
      MedicineDetailsExtraSettingID {
        id
      }
      error {
        message
        code
      }
    }
  }
`;
