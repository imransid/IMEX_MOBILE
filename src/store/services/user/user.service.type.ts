import { IMedicineDetails } from "../medicineDetails/medicineDetails.service.type";

export interface IUser{
  id: number;
  fullName: string;
  mobileNumber: string;
  password: string;
  email: string;
  gender: string;
  birthday: string;
  medicines: [IMedicineDetails]
}
