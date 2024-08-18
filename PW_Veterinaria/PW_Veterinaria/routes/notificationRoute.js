import express from 'express';
import { notificationController } from '../controllers/notificationController.js';

const router = express.Router();

// Única ruta POST que manejará todas las operaciones CRUD
router.post('/', notificationController);

export default router;
