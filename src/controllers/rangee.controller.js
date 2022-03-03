const db = require("../../config/database.js");
const Rangee = db.rangees;

exports.create = (rangee) => {
    return Rangee.create({
        ra_id: rangee.ra_id,
        fk_mo: rangee.fk_mo,
        fk_ba: rangee.fk_ba
    })
        .then((rangee) => {
            console.log(">> Created Rangee: "+ JSON.stringify(tag, null, 2));
            return rangee;
        })
        .catch((err) => {
            console.log(">> Error while creating Rangee: ", err);
        })
};

exports.findRangeeProduits = (rangeeId) => {
    return Rangee.findByPk(rangeeId, { include: ["produits"] })
      .then((rangee) => {
        return rangee;
      })
      .catch((err) => {
        console.log(">> Error while finding rangee: ", err);
      });
};

exports.getModuleRangees = (moduleId) => {
  return Rangee.findAll({
    where: {
      fk_mo: moduleId
    }
  })
}

exports.getRangees = (ba_id, mo_id) => {
  return Rangee.findAll({
      where: {
          fk_ba: ba_id,
          fk_mo: mo_id
      }
  })
}

exports.getRangee = (ba_id, mo_id, ra_id) => {
  return Rangee.findAll({
      where: {
          fk_ba: ba_id,
          fk_mo: mo_id,
          ra_id: ra_id
      }
  })
}