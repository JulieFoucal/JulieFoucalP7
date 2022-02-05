const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('sqlite:backend/tests.sqlite');

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    hash: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    salt: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telephone: {
        type: DataTypes.INTEGER,
        unique: true
    }
},{
    timestamps: false,
    underscored: true
});

const Post = sequelize.define('post', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    media_url: {
        type: DataTypes.STRING,
        allowNull: true,
    },
},{
    timestamps: false,
    underscored: true
});
Post.belongsTo(User);

const Commentary = sequelize.define('commentary', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
},{
    timestamps: false,
    underscored: true
});
Commentary.belongsTo(User);
Commentary.belongsTo(Post);

exports.User = User;
exports.Post = Post;
exports.Commentary = Commentary;

(async () => {
    await sequelize.sync({force: true});
})
