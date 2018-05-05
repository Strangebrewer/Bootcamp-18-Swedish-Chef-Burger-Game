module.exports = function (sequelize, DataTypes) {
  var Diner = sequelize.define("Diner", {
    diner_name: {
      type: DataTypes.STRING,
        allowNull: false,
      validate: {
        len: [2, 15]
      }
    },
    full: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
      timestamps: null
    });

  Diner.associate = function (models) {
    Diner.hasMany(models.Burger, {
      // onDelete: "cascade"
    });
  }

  return Diner;
};