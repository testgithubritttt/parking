
import express from 'express';
import { addMoneyToWallet, registerData, email, deletedata, loginpost, forgotpassword, resetPassword, addParkingSlots, slotParkedUser, payment, editData, listUser, delData, getRemainingSlots } from '../authController/UserController.js';
import { checkValidation } from '../middleware/userValidation.js';
import { authenticateToken } from '../middleware/authentication.js';
import { checkUserRole } from '../middleware/authorization.js';
const router = express.Router();

router.use(express.json());


router.post('/register', checkValidation, registerData);
router.get('/email/:userId', email);
router.post('/login', loginpost);
router.post('/forgotpassword', forgotpassword);
router.delete('/deledata', deletedata);
router.post('/reset-password/:id', resetPassword);

router.use(authenticateToken);
router.post('/parkingslot/:id', addParkingSlots);
router.post('/slotparkeduser/:id', slotParkedUser);
router.post('/payment/:id', payment);

router.put('/editData/:id', checkValidation, editData);
router.post('/delete/:id', delData);
router.get('/listuser', checkUserRole('2'), listUser);
router.post('/walletmoney/:id', addMoneyToWallet);
router.get('/remainingSlots/:id', getRemainingSlots);
export default router;






