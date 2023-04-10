module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
      },

      displayName: DataTypes.STRING,

      email: DataTypes.STRING,

      password: DataTypes.STRING,

      image: DataTypes.STRING,
    },
    {
      tableName: "users",
      underscored: true,
      timestamps: false,
    }
  );

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foreignKey: "userId",
      as: "blogPosts",
    });
  };

  return User;
};
