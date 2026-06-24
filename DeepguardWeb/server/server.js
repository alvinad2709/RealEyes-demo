import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import toolsRoutes from './routes/tools.js';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tools', toolsRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Deepguard API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
