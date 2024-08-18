import express from 'express';
import { appointmentController } from '../controllers/appointmentController.js';

const router = express.Router();

// Única ruta POST que manejará todas las operaciones CRUD
router.post('/', appointmentController);

export default router;