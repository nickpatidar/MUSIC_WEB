import express from 'express';
import cors from 'cors';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from './routes/user.routes.js';
import adminRoutes from './routes/admin.routes.js';
import songRoutes from './routes/songRoute.js';

import cookieParser from 'cookie-parser';
import connectToDb from './db/db.js';
import connectCloudinary from './db/cloudinary.js';
import albumRouter from './routes/albumRote.js';



connectToDb()
connectCloudinary();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use('/users', userRoutes);
app.use('/admin', adminRoutes);
app.use('/songs', songRoutes);
app.use('/album', albumRouter);



export default app;