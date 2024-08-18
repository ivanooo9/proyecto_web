import express from 'express';
import { userController } from '../controllers/userController.js';

const router = express.Router();

// Única ruta POST que manejará todas las operaciones CRUD
router.post('/', userController);

export default router;