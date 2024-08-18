import firebase from '../firebase.js';
import Notification from '../models/notificationModel.js';
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

export const notificationController = async (req, res, next) => {
  try {
    const { action } = req.body;

    switch (action) {
      case 'create':
        await createNotification(req, res);
        break;
      case 'getAll':
        await getNotifications(req, res);
        break;
      case 'getOne':
        await getNotification(req, res);
        break;
      case 'update':
        await updateNotification(req, res);
        break;
      case 'delete':
        await deleteNotification(req, res);
        break;
      case 'getByUser':
        await getNotificationsByUser(req, res);
        break;
      default:
        res.status(400).send('Invalid action');
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const createNotification = async (req, res) => {
  const data = req.body.data;
  await addDoc(collection(db, 'notification'), data);
  res.status(200).send('Notification created successfully');
};

const getNotifications = async (req, res) => {
  const notifications = await getDocs(collection(db, 'notification'));
  const notificationArray = [];
  if (notifications.empty) {
    res.status(404).send('No notifications found');
  } else {
    notifications.forEach((doc) => {
      const notification = new Notification(
        doc.id,
        doc.data().active,
        doc.data().id_user,
        doc.data().message,
        doc.data().related_id,
        doc.data().scheduled_date,
        doc.data().status,
        doc.data().title,
        doc.data().type
      );
      notificationArray.push(notification);
    });
    res.status(200).send(notificationArray);
  }
};

const getNotification = async (req, res) => {
  const id = req.body.id;
  const notification = doc(db, 'notification', id);
  const data = await getDoc(notification);
  if (data.exists()) {
    res.status(200).send(data.data());
  } else {
    res.status(404).send('Notification not found');
  }
};

const updateNotification = async (req, res) => {
  const id = req.body.id;
  const data = req.body.data;
  const notification = doc(db, 'notification', id);
  await updateDoc(notification, data);
  res.status(200).send('Notification updated successfully');
};

const deleteNotification = async (req, res) => {
  const id = req.body.id;
  await deleteDoc(doc(db, 'notification', id));
  res.status(200).send('Notification deleted successfully');
};

const getNotificationsByUser = async (req, res) => {
  const userId = req.body.userId;
  const notificationsRef = collection(db, 'notification');
  const q = query(notificationsRef, where("id_user", "==", userId));
  const querySnapshot = await getDocs(q);
  const notificationArray = [];
  querySnapshot.forEach((doc) => {
    const notification = new Notification(
      doc.id,
      doc.data().active,
      doc.data().id_user,
      doc.data().message,
      doc.data().related_id,
      doc.data().scheduled_date,
      doc.data().status,
      doc.data().title,
      doc.data().type
    );
    notificationArray.push(notification);
  });
  res.status(200).send(notificationArray);
};