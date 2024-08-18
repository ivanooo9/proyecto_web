import firebase from '../firebase.js';
import User from '../models/userModel.js';
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

export const userController = async (req, res, next) => {
  try {
    const { action } = req.body;

    switch (action) {
      case 'create':
        await createUser(req, res);
        break;
      case 'getAll':
        await getUsers(req, res);
        break;
      case 'getOne':
        await getUser(req, res);
        break;
      case 'update':
        await updateUser(req, res);
        break;
      case 'delete':
        await deleteUser(req, res);
        break;
      case 'getByRole':
        await getUsersByRole(req, res);
        break;
      default:
        res.status(400).send('Invalid action');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createUser = async (req, res) => {
  const data = req.body.data;
  try {
    const userRef = await addDoc(collection(db, 'user'), data);
    res.status(200).send({ message: 'User created successfully', id: userRef.id });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await getDocs(collection(db, 'user'));
    const userArray = [];
    users.forEach((doc) => {
      const user = new User(
        doc.id,
        doc.data().address,
        doc.data().birth_date,
        doc.data().cellular_phone,
        doc.data().email,
        doc.data().last_access_date,
        doc.data().name,
        doc.data().password_salt_hash,
        doc.data().role,
        doc.data().signup_date,
        doc.data().status,
        doc.data().surname,
        doc.data().license,
        doc.data().vet_specialty,
        doc.data().schedule,
        doc.data().pets
      );
      userArray.push(user);
    });
    res.status(200).send(userArray);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getUser = async (req, res) => {
  const id = req.body.id;
  const user = doc(db, 'user', id);
  const data = await getDoc(user);
  if (data.exists()) {
    res.status(200).send(data.data());
  } else {
    res.status(404).send('User not found');
  }
};

const updateUser = async (req, res) => {
  const id = req.body.id;
  const data = req.body.data;
  const user = doc(db, 'user', id);
  await updateDoc(user, data);
  res.status(200).send('User updated successfully');
};

const deleteUser = async (req, res) => {
  const id = req.body.id;
  await deleteDoc(doc(db, 'user', id));
  res.status(200).send('User deleted successfully');
};

const getUsersByRole = async (req, res) => {
  const role = req.body.role;
  try {
    const usersRef = collection(db, 'user');
    const q = query(usersRef, where("role", "==", role));
    const querySnapshot = await getDocs(q);
    const userArray = [];
    querySnapshot.forEach((doc) => {
      const user = new User(
        doc.id,
        doc.data().address,
        doc.data().birth_date,
        doc.data().cellular_phone,
        doc.data().email,
        doc.data().last_access_date,
        doc.data().name,
        doc.data().password_salt_hash,
        doc.data().role,
        doc.data().signup_date,
        doc.data().status,
        doc.data().surname,
        doc.data().license,
        doc.data().vet_specialty,
        doc.data().schedule,
        doc.data().pets
      );
      userArray.push(user);
    });
    res.status(200).send(userArray);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
