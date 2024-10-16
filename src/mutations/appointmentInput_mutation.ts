import { gql } from "@apollo/client";

export const APPOINTMENT_INPUT_MUTATION = gql`
  mutation AddAppointment($appointmentInput: AppointmentDto!) {
    addAppointment(appointmentInput: $appointmentInput) {
      id
      date
      time
      doctorName
      location
      setReminder
      error {
        message
        code
      }
    }
  }
`;
