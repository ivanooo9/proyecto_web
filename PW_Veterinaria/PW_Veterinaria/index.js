import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { getFirestore } from 'firebase/firestore';
import firebase from './firebase.js';

// Importar rutas
import appointmentRoutes from './routes/appointmentRoute.js';
import notificationRoutes from './routes/notificationRoute.js';
import petRoutes from './routes/petRoute.js';
import servicesRoutes from './routes/servicesRoute.js';
import userRoutes from './routes/userRoute.js';
import medicalRecordRoute from './routes/medicalRecordRoute.js';

// Configuración
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Inicializar Firestore
const db = getFirestore(firebase);

// Rutas
app.use('/api/appointments', appointmentRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/services', servicesRoutes);
app.use('/api/users', userRoutes);
app.use('/medicalRecord', medicalRecordRoute);


// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API de Veterinaria funcionando correctamente');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

export { db };