const { Sequelize } = require('sequelize');
const mysql = require('mysql2/promise');

require('dotenv').config();

// Create the database if it does not exist
const createDatabase = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    });
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`);
    console.log(`Database "${process.env.DB_NAME}" created or already exists.`);
    await connection.end();
  } catch (err) {
    console.error('Unable to create the database:', err);
  }
};



// Initialize Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: true, // Enable logging for debugging
  }
);

// Function to establish the database connection and sync tables
const initializeDatabase = async () => {
  await createDatabase(); // Ensure the database exists

  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');
    
    // Synchronize all models, including User
    await sequelize.sync({ alter: true }); // Creates tables if they do not exist
    console.log('All models were synchronized successfully.');

    // await createMockData(); // Insert mock data after syncing tables
  } catch (error) {
    console.error('Unable to initialize the database:', error);
  }
};

// Initialize the database
initializeDatabase();

module.exports = sequelize;
