const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Project extends Model {
    
}

Project.init(
    {
        project_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        project_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            references: {
                model: 'user',
                key: 'user_id',
            }
        }
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'project',
    }
);

module.exports = Project;
