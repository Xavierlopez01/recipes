const { DataTypes } = require('sequelize')

const db = require('../utils/database')
const Ingredients = require('./ingredients.models')
const Users = require('./users.models')

const UserIngredient = db.define('user_ingredien', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    amount: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id',
        references: {
            key: 'id',
            model: Users
        }
    },
    ingredientId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'recipe_id',
        references: {
            key: 'id',
            model: Ingredients
        }
    }, 
    
})

module.exports = UserIngredient