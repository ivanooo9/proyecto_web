import express from 'express';
import { availableSlotsController } from '../controllers/availableSlotsController.js';

const router = express.Router();

// Única ruta POST que manejará todas las operaciones CRUD
router.post('/', availableSlotsController);

export default router;