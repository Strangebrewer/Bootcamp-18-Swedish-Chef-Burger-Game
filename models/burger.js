module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
      timestamps: null
    });

  Burger.associate = function (models) {
    Burger.belongsTo(models.Diner, {
      foreignKey: {
        allowNull: false
      },
      onDelete: "cascade"
    });
  }

  return Burger;
};