const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Key extends Model {
    
}

Key.init(
    {
        key: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        project_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'project',
                key: 'project_id',
            }
        }
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'key',
    }
);

module.exports = Key;
