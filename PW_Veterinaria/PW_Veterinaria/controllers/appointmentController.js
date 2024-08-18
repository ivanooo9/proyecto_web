import firebase from '../firebase.js';
import Appointment from '../models/appointmentModel.js';
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy
} from 'firebase/firestore';

const db = getFirestore(firebase);

export const appointmentController = async (req, res, next) => {
  try {
    const { action } = req.body;

    switch (action) {
      case 'create':
        await createAppointment(req, res);
        break;
      case 'getAll':
        await getAppointments(req, res);
        break;
      case 'getOne':
        await getAppointment(req, res);
        break;
      case 'update':
        await updateAppointment(req, res);
        break;
      case 'delete':
        await deleteAppointment(req, res);
        break;
      case 'getByVeterinarian':
        await getAppointmentsByVeterinarian(req, res);
        break;
      default:
        res.status(400).send('Invalid action');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};


const getAppointment = async (req, res) => {
  const id = req.body.id;
  const appointment = doc(db, 'appointment', id);
  const data = await getDoc(appointment);
  if (data.exists()) {
    res.status(200).send(data.data());
  } else {
    res.status(404).send('Appointment not found');
  }
};

const updateAppointment = async (req, res) => {
  const id = req.body.id;
  const data = req.body.data;
  const appointment = doc(db, 'appointment', id);
  await updateDoc(appointment, data);
  res.status(200).send('Appointment updated successfully');
};

const deleteAppointment = async (req, res) => {
  const id = req.body.id;
  await deleteDoc(doc(db, 'appointment', id));
  res.status(200).send('Appointment deleted successfully');
};

const getAppointmentsByVeterinarian = async (req, res) => {
  const { veterinarianId, sortOrder } = req.body;
  try {
    const appointmentsRef = collection(db, 'appointment');
    const q = query(
      appointmentsRef, 
      where("id_veterinary", "==", veterinarianId),
      orderBy("time_date", sortOrder || 'asc')
    );
    const querySnapshot = await getDocs(q);
    const appointmentArray = [];
    querySnapshot.forEach((doc) => {
      const appointment = new Appointment(
        doc.id,
        doc.data().id_pet,
        doc.data().id_veterinary,
        doc.data().reason,
        doc.data().status,
        doc.data().time_date,
        doc.data().active
      );
      appointmentArray.push(appointment);
    });
    res.status(200).send(appointmentArray);
  } catch (error) {
    res.status(400).send(error.message);
  }
};


