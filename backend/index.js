const express = require('express');
const tourRoutes = require('./routes/tourRoutes');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');
const cors = require('cors');
const { createMockData } = require('./models/user');

dotenv.config();



const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/tours', tourRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 4200;

createMockData();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
