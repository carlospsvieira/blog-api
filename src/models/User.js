const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    tableName: "users",
    underscored: true,

    id: DataTypes.INTEGER,

    displayName: DataTypes.STRING,

    email: DataTypes.STRING,

    password: DataTypes.STRING,

    image: DataTypes.STRING,
  });

  return User
};

module.exports = UserModel;
