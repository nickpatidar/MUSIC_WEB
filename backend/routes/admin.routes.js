import express from 'express';
const router = express.Router();
import { body } from 'express-validator';
import { registerAdmin, loginAdmin, profileAdmin, logoutAdmin } from '../controllers/admin.controller.js';
import { authAdmin } from '../middlewares/auth.middleware.js';

router.post('/register', [
    body('fullname.firstname').notEmpty().withMessage('Firstname is required'),
    body('email').isEmail().withMessage('Email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], registerAdmin);

router.post("/login", [
    body('email').isEmail().withMessage('Email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], loginAdmin);

router.get('/profile', authAdmin, profileAdmin);

router.get('/logout', authAdmin, logoutAdmin);

export default router;