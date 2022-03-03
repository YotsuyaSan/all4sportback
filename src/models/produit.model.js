module.exports = (sequelize, Sequelize) => {
    const Produit = sequelize.define("produit", {
      pr_reference: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      pr_cout_unitaire_HT: {
        type: Sequelize.FLOAT
      },
      pr_description: {
        type: Sequelize.STRING
      },
      fk_ba: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      fk_mo: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      fk_ra: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      fk_se: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      fk_et: {
        type: Sequelize.INTEGER,
        primaryKey: true
      }
    });
  
    return Produit;
}