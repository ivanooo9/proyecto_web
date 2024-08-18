import express from 'express';
import { serviceController } from '../controllers/servicesController.js';

const router = express.Router();

// Única ruta POST que manejará todas las operaciones CRUD
router.post('/', serviceController);

export default router;