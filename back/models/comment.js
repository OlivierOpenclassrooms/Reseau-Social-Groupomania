module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comment", {
      userId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      imageUrl: {
        type: Sequelize.STRING,
        allowNull: true
      }
    });
  
    return Comment;
  };