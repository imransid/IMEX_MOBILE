export interface IMedicineDetailsExtraSettingType {
  instrucTion: string;
  medicineTakeEachDay: string;
  treatmentDurationStartTime: string;
  treatmentDurationEndTime: string;
  medicineReminderTotalReq: string;
  medicineReminderCurrentStock: string;
  medicineReminderRemindToLeft: string;
}

export interface InstrucTion {
  instrucTion: string;
}

export interface ITreatmentDuration {
  treatmentDurationStartTime: string;
  treatmentDurationEndTime: string;
  medicineTakeEachDay: string;
}

export interface IMedicineReminder {
  medicineReminderTotalReq: string;
  medicineReminderCurrentStock: string;
  medicineReminderRemindToLeft: string;
}
