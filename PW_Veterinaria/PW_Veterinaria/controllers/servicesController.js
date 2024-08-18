import firebase from '../firebase.js';
import Service from '../models/servicesModel.js';
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';

const db = getFirestore(firebase);

export const serviceController = async (req, res, next) => {
  try {
    const { action } = req.body;

    switch (action) {
      case 'create':
        await createService(req, res);
        break;
      case 'getAll':
        await getServices(req, res);
        break;
      case 'getOne':
        await getService(req, res);
        break;
      case 'update':
        await updateService(req, res);
        break;
      case 'delete':
        await deleteService(req, res);
        break;
      default:
        res.status(400).send('Invalid action');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createService = async (req, res) => {
  const data = req.body.data;
  try {
    const docRef = await addDoc(collection(db, 'services'), data);
    res.status(200).send({ message: 'Service created successfully', id: docRef.id });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getServices = async (req, res) => {
  try {
    const services = await getDocs(collection(db, 'services'));
    const serviceArray = [];
    services.forEach((doc) => {
      const service = new Service(
        doc.id,
        doc.data().name,
        doc.data().description,
        doc.data().duration,
        doc.data().price,
        doc.data().active
      );
      serviceArray.push(service);
    });
    res.status(200).send(serviceArray);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getService = async (req, res) => {
  const id = req.body.id;
  const service = doc(db, 'services', id);
  const data = await getDoc(service);
  if (data.exists()) {
    res.status(200).send(data.data());
  } else {
    res.status(404).send('Service not found');
  }
};

const updateService = async (req, res) => {
  const id = req.body.id;
  const data = req.body.data;
  const service = doc(db, 'services', id);
  await updateDoc(service, data);
  res.status(200).send('Service updated successfully');
};

const deleteService = async (req, res) => {
  const id = req.body.id;
  await deleteDoc(doc(db, 'services', id));
  res.status(200).send('Service deleted successfully');
};