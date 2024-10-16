import { gql } from "@apollo/client";

export const MEDICINE_INPUT_MUTATION = gql`
  mutation AddMedicine($medicineInput: MedicineDto!) {
    addMedicine(medicineInput: $medicineInput) {
      id
      medicineName
      medicineStatus
      takeStatus
      doseQuantity
      doseTime
      error {
        message
        code
      }
    }
  }
`;
