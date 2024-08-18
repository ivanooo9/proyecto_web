import express from 'express';
import { medicalRecordController } from '../controllers/medicalRecordController.js';

const router = express.Router();

// Única ruta POST que manejará todas las operaciones CRUD
router.post('/', medicalRecordController);

export default router;
