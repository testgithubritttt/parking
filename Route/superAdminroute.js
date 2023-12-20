import express from 'express';
const router = express.Router();
import { checkUserRole } from '../middleware/authorization.js';
import { authenticateToken } from '../middleware/authentication.js';
import { checkValidation } from '../middleware/userValidation.js';
import { editDataBySuperadmin } from '../Controller/superAdminController.js';
router.use(express.json());
router.put('/editData/:id', authenticateToken, checkUserRole('1'), checkValidation, editDataBySuperadmin);
export default router;