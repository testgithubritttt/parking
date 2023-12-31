import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import UserRoute from './Route/UserRoute.js';
import adminRoutes from './Route/adminRoute.js';
import superAdminRoutes from './Route/superAdminroute.js';
import connectDB from './config/dbConnection.js';
const app = express();
app.use(express.json());
connectDB();
app.use(express.urlencoded({ extended: true }))
app.use(UserRoute);
app.use('/admin', adminRoutes);
app.use('/superadmin', superAdminRoutes);
app.listen(process.env.PORT, () => {
    console.log(`app is listen at ${process.env.PORT}`);
})