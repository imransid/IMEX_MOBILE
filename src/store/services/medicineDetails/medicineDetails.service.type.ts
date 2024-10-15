import { IMedicineDetailsExtraSetting } from "../medicineDetailsExtraSetting/medicineDetailsExtraSetting.service.type";
import { IUser } from "../user/user.service.type";

export interface IMedicineDetails {
  id: number;
  user: string;
  userID: IUser
  medicineName: string;
  medicineStatus: string;
  takeStatus: string;
  birthday: string;
  doseQuantity: string;
  doseTime: string;
  MedicineDetailsExtraSetting: [IMedicineDetailsExtraSetting]
}
  