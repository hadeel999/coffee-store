'use strict';

const coffeeModel = (sequelize, DataTypes) => sequelize.define('coffee', {
  name: { type: DataTypes.STRING, required: true, unique : true  },
  weight: { type: DataTypes.STRING, required: true },
  price: { type: DataTypes.STRING, required: true },
  type: { type: DataTypes.ENUM('sweets', 'drink', 'food'), required: true }
},{ 
    sequelize,
    tableName: 'coffee',
    timestamps: false,
    });

module.exports = coffeeModel;