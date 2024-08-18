import express from 'express';
import { petController } from '../controllers/petController.js';

const router = express.Router();

// Única ruta POST que manejará todas las operaciones CRUD
router.post('/', petController);

export default router;