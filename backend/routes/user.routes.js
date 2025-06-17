import express from 'express';
const userRouter = express.Router();
import { body } from 'express-validator';
import { registerUser, loginUser, profileUser, logoutUser } from '../controllers/user.controller.js';
import {authUser} from '../middlewares/auth.middleware.js';

userRouter.post('/register', [
    body('fullname.firstname').notEmpty().withMessage('Firstname is required'),
    body('email').isEmail().withMessage('Email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
],
registerUser
)

userRouter.post("/login",[
    body('email').isEmail().withMessage('Email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
],
loginUser
)

userRouter.get('/profile', authUser, profileUser);

userRouter.get('/logout', authUser, logoutUser);


export default userRouter;