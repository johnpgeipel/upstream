module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    Title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Info: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Actors: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Cover_Photo_Url: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isUrl: true
      }
    },
    Steaming_Services: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Release_Date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true
      }
    },
    Review: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Watched: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
  return Post;
};
