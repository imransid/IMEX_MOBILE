import { gql } from "@apollo/client";

export const APPOINTMENT_MUTATION = gql`
  mutation AddAppointment($appointmentInput: AppointmentInput!) {
    addAppointment(appointmentInput: $appointmentInput) {
      id
      date
      time
      doctorName
      location
      setReminder
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
