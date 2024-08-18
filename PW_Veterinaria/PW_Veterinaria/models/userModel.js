class User {
  constructor(id, address, birth_date, cellular_phone, email, last_access_date, name, password_salt_hash, role, signup_date, status, surname, license, vet_specialty, schedule, pets) {
    this.id = id;
    this.address = address;
    this.birth_date = birth_date;
    this.cellular_phone = cellular_phone;
    this.email = email;
    this.last_access_date = last_access_date;
    this.name = name;
    this.password_salt_hash = password_salt_hash;
    this.role = role;
    this.signup_date = signup_date;
    this.status = status;
    this.surname = surname;
    this.license = license;
    this.vet_specialty = vet_specialty;
    this.schedule = schedule;
    this.pets = pets;
  }
}

export default User;