import { IMedicineDetailsExtraSetting } from "../medicineDetailsExtraSetting/medicineDetailsExtraSetting.service.type"

export interface IPrescription{
  id: number;
  filePath: string;
  MedicineDetailsExtraSettingID: IMedicineDetailsExtraSetting;
}