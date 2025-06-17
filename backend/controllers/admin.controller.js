import adminModel from '../models/admin.model.js';
import { createAdmin } from '../services/admin.service.js';
import { validationResult } from 'express-validator';
import blacklistTokenModel from '../models/blacklistToken.model.js';

export const registerAdmin = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;

    const isAdminAlready = await adminModel.findOne({ email });

    if (isAdminAlready) {
        return res.status(400).json({ message: 'Admin already exists' });
    }

    const hashedPassword = await adminModel.hashPassword(password);

    const admin = await createAdmin({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });

    const token = admin.generateAuthToken();

    res.status(201).json({ token, admin });
};

export const loginAdmin = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const admin = await adminModel.findOne({ email }).select('+password');

    if (!admin) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordMatched = await admin.comparePassword(password);
    
    if (!isPasswordMatched) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = admin.generateAuthToken();

    res.cookie('token', token)

    res.status(200).json({ token, admin });
};

export const profileAdmin = async (req, res, next) => {
    res.status(200).json(req.admin);
};

export const logoutAdmin = async (req, res, next) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    await blacklistTokenModel.create({ token });
    res.status(200).json({ message: 'Logged out successfully' });
};