export interface IMedicineDetailsType {
  medicineName: string;
  medicineStatus: string;
  takeStatus: string;
  doseQuantity: string;
  doseTime: string;
  storedMedicineList: IMedicine[];
  strengthMed: string;
  unitMed: string;
  typeMed: string;
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
