class MedicalRecord {
  constructor(id, id_pet, date, diagnostic, id_veterinary, reason, treatment) {
    this.id = id;
    this.id_pet = id_pet;
    this.date = date;
    this.diagnostic = diagnostic;
    this.id_veterinary = id_veterinary;
    this.reason = reason;
    this.treatment = treatment;
  }
}

export default MedicalRecord;