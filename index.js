import express from 'express';
import connectDB from './dao/db.js'; 
import userRoutes from './routes/routes.js'; 
import adminRouter from './admin.js'; 

const app = express();

connectDB();

app.use(express.json());

// app.use('/users', userRoutes);
app.use('/admin', adminRouter); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
