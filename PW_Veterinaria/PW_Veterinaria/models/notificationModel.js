class Notification {
  constructor(id, active, id_user, message, related_id, scheduled_date, status, title, type) {
    this.id = id;
    this.active = active;
    this.id_user = id_user;
    this.message = message;
    this.related_id = related_id;
    this.scheduled_date = scheduled_date;
    this.status = status;
    this.title = title;
    this.type = type;
  }
}

export default Notification;