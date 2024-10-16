import { gql } from "@apollo/client";

export const MEDICINE_SETTING_INPUT_MUTATION = gql`
  mutation AddMedicineSetting($settingInput: MedicineSettingDto!) {
    addMedicineSetting(settingInput: $settingInput) {
      id
      InstrucTion
      MedicineTakeEachDay
      treatmentDurationStartTime
      treatmentDurationEndTime
      medicineReminderTotalReq
      medicineReminderCurrentStock
      medicineReminderRemindToLeft
      error {
        message
        code
      }
    }
  }
`;
