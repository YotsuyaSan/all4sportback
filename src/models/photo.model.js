module.exports = (sequelize, Sequelize) => {
    const Photo = sequelize.define("photo", {
      ph_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      ph_img: {
        type: Sequelize.STRING
      }
    });
  
    return Photo;
}