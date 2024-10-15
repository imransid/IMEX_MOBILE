import { IMedicineDetails } from "../medicineDetails/medicineDetails.service.type";
import { IAppointment } from "../appointment/appointment.service.type";
import { IPrescription } from "../prescription/prescription.service.type";

export interface IMedicineDetailsExtraSetting{
  id: number;
  MedicineDetails: IMedicineDetails
  medicineDetailsId: number;
  InstrucTion: string;
  MedicineTakeEachDay: string;
  treatmentDurationStartTime: string;
  treatmentDurationEndTime: string;
  medicineReminderTotalReq: string;
  medicineReminderCurrentStock: string;
  medicineReminderRemindToLeft: string;
  appointment: [IAppointment]
  prescription: [IPrescription]
}