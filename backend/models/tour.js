const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

// Define the Tour model
const Tour = sequelize.define('Tour', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('planned', 'completed'),
    defaultValue: 'planned',
  },
}, {
  tableName: 'tours',
  timestamps: true,
});

// Define the Destination model
const Destination = sequelize.define('Destination', {
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  activities: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  days: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'destinations',
  timestamps: true,
});

// Set up relationships
Tour.hasMany(Destination, { as: 'destinations', foreignKey: 'tourId' });
Destination.belongsTo(Tour, { foreignKey: 'tourId' });

module.exports = { Tour, Destination };
