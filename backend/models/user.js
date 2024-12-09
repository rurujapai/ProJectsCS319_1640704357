const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

// Define the User model
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('admin', 'customer'),
    defaultValue: 'customer',
  },
}, {
  tableName: 'users',
  timestamps: true,
});

const createMockData = async () => {
    const mockUsers = [
      {
        name: 'Admin',
        email: 'admin@admin.com',
        password: 'password', // In production, passwords should be hashed!
        role: 'admin',
      },
    ];
  
    try {
      // Check if users already exist
      const existingUsers = await User.findAll();
      if (existingUsers.length === 0) {
        await User.bulkCreate(mockUsers);
        console.log('Mock user data created.');
      } else {
        console.log('Mock user data already exists. Skipping creation.');
      }
    } catch (error) {
      console.error('Error creating mock data:', error);
    }
  };
module.exports = {User,createMockData};
