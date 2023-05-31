import { Router } from 'express';
import {
  getAllCtll,
  getByIdCtll,
  createCtll,
  updateCtll,
  deleteCtll,
  } from '../controllers/products.controllers.js';

const router = Router();

//viene peticion desde server.js y se deriva a controllers
router.get('/', getAllCtll);
router.get('/:id', getByIdCtll);
router.post('/', createCtll);
router.put('/:id', updateCtll);
router.delete('/:id', deleteCtll);

export default router;