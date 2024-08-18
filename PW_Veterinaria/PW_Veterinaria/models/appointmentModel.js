class Appointment {
  constructor(id, id_pet, id_veterinary, reason, status, time_date, active) {
    this.id = id;
    this.id_pet = id_pet;
    this.id_veterinary = id_veterinary;
    this.reason = reason;
    this.status = status;
    this.time_date = time_date;
    this.active = active;
  }
}

export default Appointment;