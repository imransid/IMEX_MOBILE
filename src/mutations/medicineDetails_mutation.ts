import { gql } from '@apollo/client';

export const MEDICINE_DETAILS_MUTATION = gql`
  mutation AddMedicineDetails($medicineInput: MedicineDetailsInput!) {
    addMedicineDetails(medicineInput: $medicineInput) {
      id
      user {
        id
        fullName
      }
      userID
      medicineName
      medicineStatus
      takeStatus
      birthday
      doseQuantity
      doseTime
      MedicineDetailsExtraSetting {
        id
        InstrucTion
      }
      error {
        message
        code
      }
    }
  }
`;
