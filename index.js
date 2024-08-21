import express from 'express';
import connectDB from './dao/db.js'; // Note the .js extension
import userRoutes from './routes/routes.js'; // Note the .js extension
import adminRouter from './admin.js'; // Note the .js extension

const app = express();

connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/admin', adminRouter); // AdminJS routes

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
