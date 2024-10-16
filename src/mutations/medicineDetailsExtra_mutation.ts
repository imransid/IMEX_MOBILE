import { gql } from '@apollo/client';

export const MEDICINE_DETAILS_EXTRA_SETTING_MUTATION = gql`
  mutation AddMedicineDetailsExtraSetting($extraSettingInput: MedicineDetailsExtraSettingInput!) {
    addMedicineDetailsExtraSetting(extraSettingInput: $extraSettingInput) {
      id
      medicineDetailsId
      InstrucTion
      MedicineTakeEachDay
      treatmentDurationStartTime
      treatmentDurationEndTime
      medicineReminderTotalReq
      medicineReminderCurrentStock
      medicineReminderRemindToLeft
      appointment {
        id
        date
        time
        doctorName
      }
      prescription {
        id
        filePath
      }
      error {
        message
        code
      }
    }
  }
`;
