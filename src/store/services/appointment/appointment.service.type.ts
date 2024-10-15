import { IMedicineDetailsExtraSetting } from "../medicineDetailsExtraSetting/medicineDetailsExtraSetting.service.type"

export interface IAppointment{
  id: number;
  date: string;
  time: string;
  doctorName: string;
  location: string;
  setReminder: string;
  MedicineDetailsExtraSettingID: IMedicineDetailsExtraSetting;
}