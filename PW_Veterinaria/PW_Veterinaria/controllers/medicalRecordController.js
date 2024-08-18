import firebase from '../firebase.js';
import MedicalRecord from '../models/medicalRecordModel.js';
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

export const medicalRecordController = async (req, res, next) => {
  try {
    const { action } = req.body;

    switch (action) {
      case 'create':
        await createMedicalRecord(req, res);
        break;
      case 'getAll':
        await getMedicalRecords(req, res);
        break;
      case 'getOne':
        await getMedicalRecord(req, res);
        break;
      case 'update':
        await updateMedicalRecord(req, res);
        break;
      case 'delete':
        await deleteMedicalRecord(req, res);
        break;
      default:
        res.status(400).send('Invalid action');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createMedicalRecord = async (req, res) => {
  const data = req.body.data;
  try {
    const docRef = await addDoc(collection(db, 'medicalRecords'), data);
    res.status(200).send({ message: 'Medical record created successfully', id: docRef.id });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getMedicalRecords = async (req, res) => {
  try {
    const medicalRecords = await getDocs(collection(db, 'medicalRecords'));
    const medicalRecordArray = [];
    medicalRecords.forEach((doc) => {
      const medicalRecord = new MedicalRecord(
        doc.id,
        doc.data().id_pet,
        doc.data().date,
        doc.data().diagnostic,
        doc.data().id_veterinary,
        doc.data().reason,
        doc.data().treatment
      );
      medicalRecordArray.push(medicalRecord);
    });
    res.status(200).send(medicalRecordArray);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getMedicalRecord = async (req, res) => {
  const id = req.body.id;
  try {
    const medicalRecord = doc(db, 'medicalRecords', id);
    const data = await getDoc(medicalRecord);
    if (data.exists()) {
      res.status(200).send(data.data());
    } else {
      res.status(404).send('Medical record not found');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateMedicalRecord = async (req, res) => {
  const id = req.body.id;
  const data = req.body.data;
  try {
    const medicalRecord = doc(db, 'medicalRecords', id);
    await updateDoc(medicalRecord, data);
    res.status(200).send('Medical record updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteMedicalRecord = async (req, res) => {
  const id = req.body.id;
  try {
    await deleteDoc(doc(db, 'medicalRecords', id));
    res.status(200).send('Medical record deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};