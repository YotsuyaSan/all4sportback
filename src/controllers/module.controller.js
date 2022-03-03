const db = require("../../config/database.js");
const Module = db.modules;

exports.create = (module) => {
    return Module.create({
        mo_id: module.mo_id,
        fk_ba: module.fk_ba
    })
        .then((module) => {
            console.log(">> Created Module: "+ JSON.stringify(tag, null, 2));
            return module;
        })
        .catch((err) => {
            console.log(">> Error while creating Module: ", err);
        })
};

exports.findModuleProduits = (moduleId) => {
    return Module.findByPk(moduleId, { include: ["produits"] })
      .then((module) => {
        return module;
      })
      .catch((err) => {
        console.log(">> Error while finding module: ", err);
      });
};

exports.getModules = (batimentId) => {
  return Module.findAll({
    where: {
      fk_ba: batimentId
    }
  })
}

exports.getModule = (ba_id, mo_id) => {
  return Module.findAll({
    where: {
      fk_ba: ba_id,
      mo_id: mo_id
    }
  })
}