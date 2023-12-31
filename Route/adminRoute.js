import express from 'express';
const router = express.Router();
import { adminArea, editDataByAdmin } from '../Controller/adminController.js';
import { checkUserRole } from '../middleware/authorization.js';
import { checkValidation } from '../middleware/userValidation.js';
import { authenticateToken } from '../middleware/authentication.js';
router.use(express.json());
router.use(authenticateToken);
router.post('/area', checkUserRole('2'), adminArea);
router.put('/editData/:id', checkUserRole('2'),checkValidation, editDataByAdmin);
export default router;