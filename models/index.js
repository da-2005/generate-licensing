const Key = require('./Key');
const Project = require('./Project');
const User = require('./User');

User.hasMany(Project, {
    foreignKey: 'user_id',
});

Project.belongsTo(User, {
    foreignKey: 'user_id'
})

Project.hasMany(Key, {
    foreignKey: 'project_id'
})

Key.belongsTo(Project, {
    foreignKey: 'project_id'
});

module.exports = { User, Project, Key };