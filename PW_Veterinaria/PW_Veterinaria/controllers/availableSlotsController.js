import { getFirestore, collection, addDoc, query, where, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';
import firebase from '../firebase.js';

const db = getFirestore(firebase);

export const availableSlotsController = async (req, res) => {
  try {
    const { action } = req.body;

    switch (action) {
      case 'create':
        await createAvailableSlot(req, res);
        break;
      case 'getByVeterinarian':
        await getSlotsByVeterinarian(req, res);
        break;
      case 'update':
        await updateSlotStatus(req, res);
        break;
      case 'delete':
        await deleteSlot(req, res);
        break;
      default:
        res.status(400).send('Invalid action');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createAvailableSlot = async (req, res) => {
  const { veterinarianId, startTime, endTime } = req.body;
  try {
    const docRef = await addDoc(collection(db, 'availableSlots'), {
      veterinarianId,
      startTime,
      endTime,
      status: 'available'
    });
    res.status(200).send({ message: 'Slot created successfully', id: docRef.id });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getSlotsByVeterinarian = async (req, res) => {
  const { veterinarianId, startDate, endDate } = req.body;
  try {
    const slotsRef = collection(db, 'availableSlots');
    const q = query(
      slotsRef, 
      where("veterinarianId", "==", veterinarianId),
      where("startTime", ">=", startDate),
      where("endTime", "<=", endDate)
    );
    const querySnapshot = await getDocs(q);
    const slots = [];
    querySnapshot.forEach((doc) => {
      slots.push({ id: doc.id, ...doc.data() });
    });
    res.status(200).send(slots);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateSlotStatus = async (req, res) => {
  const { slotId, newStatus } = req.body;
  try {
    await updateDoc(doc(db, 'availableSlots', slotId), { status: newStatus });
    res.status(200).send('Slot status updated successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteSlot = async (req, res) => {
  const { slotId } = req.body;
  try {
    await deleteDoc(doc(db, 'availableSlots', slotId));
    res.status(200).send('Slot deleted successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};