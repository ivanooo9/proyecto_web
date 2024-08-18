import firebase from '../firebase.js';
import Pet from '../models/petModel.js';
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
  where
} from 'firebase/firestore';

const db = getFirestore(firebase);

export const petController = async (req, res, next) => {
  try {
    const { action } = req.body;

    switch (action) {
      case 'create':
        await createPet(req, res);
        break;
      case 'getAll':
        await getPets(req, res);
        break;
      case 'getOne':
        await getPet(req, res);
        break;
      case 'update':
        await updatePet(req, res);
        break;
      case 'delete':
        await deletePet(req, res);
        break;
      case 'getByOwner':
        await getPetsByOwner(req, res);
        break;
      default:
        res.status(400).send('Invalid action');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createPet = async (req, res) => {
  const data = req.body.data;
  try {
    const docRef = await addDoc(collection(db, 'pet'), data);
    res.status(200).send({ message: 'Pet created successfully', id: docRef.id });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getPetsByOwner = async (req, res) => {
  const { ownerId } = req.body;
  try {
    const petsRef = collection(db, 'pet');
    const q = query(petsRef, where("id_owner", "==", ownerId));
    const querySnapshot = await getDocs(q);
    const petArray = [];
    querySnapshot.forEach((doc) => {
      const pet = new Pet(
        doc.id,
        doc.data().active,
        doc.data().birth_day,
        doc.data().breed,
        doc.data().id_owner,
        doc.data().name,
        doc.data().species
      );
      petArray.push(pet);
    });
    res.status(200).send(petArray);
  } catch (error) {
    res.status(400).send(error.message);
  }
};