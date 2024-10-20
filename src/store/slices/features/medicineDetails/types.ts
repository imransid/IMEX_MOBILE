export interface IMedicineDetailsType {
  medicineName: string;
  medicineStatus: string;
  takeStatus: string;
  doseQuantity: string;
  doseTime: string;
  storedMedicineList: IMedicine[];
  storedMedicineWeeklyList: IStoredWeekly[];
  strengthMed: string;
  unitMed: string;
  typeMed: string;
  medicineLocalId: string;
  weeklyTime: string[];
  timeInterval: string;
  weeklyDoseTime: IWeeklyDoseTime[];
}

export interface IWeeklyDoseTime {
  doseTime: string;
  doseQuantity: string;
  medicineLocalId: string;
}

export interface IMedicine {
  medicineName: string;
  medicineStatus: string;
  takeStatus: string;
  doseQuantity: string;
  doseTime: string;
  strengthMed?: string;
  unitMed?: string;
  typeMed?: string;
  medicineId?: string;
  medicineLocalId: string;
}

export interface MedicineName {
  medicineName: string;
}

export interface StrengthUnit {
  strengthMed: string;
  unitMed: string;
}

export interface MedicType {
  typeMed: string;
}

export interface MedicStatus {
  medicineStatus: string;
}

export interface TakeStatus {
  takeStatus: string;
}

export interface doseTimeStatus {
  doseTime: string;
}

export interface doseQuantityStatus {
  doseQuantity: string;
}

export interface IWeekly {
  weeklyTime: string[];
  timeInterval: string;
  IStoredWeekly: IStoredWeekly;
}

export interface IStoredWeekly {
  medicineLocalId: IMedicineLocalId;
}

export interface IMedicineLocalId {
  weeklyTime: string[];
  timeInterval: string;
  medicineLocalId: string;
}