class AvailableSlot {
  constructor(id, veterinarianId, startTime, endTime, status) {
    this.id = id;
    this.veterinarianId = veterinarianId;
    this.startTime = startTime; // timestamp
    this.endTime = endTime; // timestamp
    this.status = status; // 'available', 'booked', 'unavailable'
  }
}
  
  export { AvailableSlot };