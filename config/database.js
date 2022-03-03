const Sequelize = require("sequelize");

let database = new Sequelize("all4sport", "root", "root", {
  host: "localhost",
  dialect: "mysql",

  define: { timestamps: false },

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

let db = {};

db.Sequelize = Sequelize;
db.database = database;

db.produits = require("../src/models/produit.model.js")(database, Sequelize);
db.photos = require("../src/models/photo.model.js")(database, Sequelize);
db.etageres = require("../src/models/etagere.model.js")(database, Sequelize);
db.modules = require("../src/models/module.model.js")(database, Sequelize);
db.rangees = require("../src/models/rangee.model.js")(database, Sequelize);
db.sections = require("../src/models/section.model.js")(database, Sequelize);
db.stocks = require("../src/models/stock.model.js")(database, Sequelize);
db.batiments = require("../src/models/batiment.model.js")(database, Sequelize);
db.users = require("../src/models/user.model.js")(database, Sequelize);
db.fournisseurs = require("../src/models/fournisseur.model.js")(
  database,
  Sequelize
);
db.rayons = require("../src/models/rayon.model.js")(database, Sequelize);

//==================================
//==================================
//==================================

db.modules.belongsTo(db.batiments, {
  foreignKey: "fk_ba",
  as: "batiment",
});

db.rangees.belongsTo(db.batiments, {
  foreignKey: "fk_ba",
  as: "batiment",
});

db.sections.belongsTo(db.batiments, {
  foreignKey: "fk_ba",
  as: "batiment",
});

db.etageres.belongsTo(db.batiments, {
  foreignKey: "fk_ba",
  as: "batiment",
});

db.produits.belongsTo(db.batiments, {
  foreignKey: "fk_ba",
  as: "batiment",
});

db.stocks.belongsTo(db.batiments, {
  foreignKey: "fk_ba",
  as: "batiment",
});

//==================================
//==================================
//==================================

db.rangees.belongsTo(db.modules, {
  foreignKey: "fk_mo",
  as: "module",
});

db.sections.belongsTo(db.modules, {
  foreignKey: "fk_mo",
  as: "module",
});

db.etageres.belongsTo(db.modules, {
  foreignKey: "fk_mo",
  as: "module",
});

db.produits.belongsTo(db.modules, {
  foreignKey: "fk_mo",
  as: "module",
});

db.stocks.belongsTo(db.modules, {
  foreignKey: "fk_mo",
  as: "module",
});

//==================================
//==================================
//==================================

db.sections.belongsTo(db.rangees, {
  foreignKey: "fk_ra",
  as: "rangee",
});

db.etageres.belongsTo(db.rangees, {
  foreignKey: "fk_ra",
  as: "rangee",
});

db.produits.belongsTo(db.rangees, {
  foreignKey: "fk_ra",
  as: "rangee",
});

db.stocks.belongsTo(db.rangees, {
  foreignKey: "fk_ra",
  as: "rangee",
});

//==================================
//==================================
//==================================

db.etageres.belongsTo(db.sections, {
  foreignKey: "fk_se",
  as: "section",
});

db.produits.belongsTo(db.sections, {
  foreignKey: "fk_se",
  as: "section",
});

db.stocks.belongsTo(db.sections, {
  foreignKey: "fk_se",
  as: "section",
});

//==================================
//==================================
//==================================

db.produits.belongsTo(db.etageres, {
  foreignKey: "fk_et",
  as: "etagere",
});

db.stocks.belongsTo(db.etageres, {
  foreignKey: "fk_et",
  as: "etagere",
});

//==================================
//==================================
//==================================

db.stocks.belongsTo(db.produits, {
  foreignKey: "fk_pr",
  as: "produit",
});

db.photos.belongsTo(db.produits, {
  foreignKey: "fk_pr",
  as: "produit",
});

//==================================
//==================================
//==================================

db.produits.belongsTo(db.fournisseurs, {
  foreignKey: "fk_fournisseur",
  as: "fournisseur",
});

//==================================
//==================================
//==================================

db.produits.belongsTo(db.rayons, {
  foreignKey: "fk_rayon",
  as: "rayon",
});

module.exports = db;
