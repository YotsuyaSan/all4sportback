const db = require("../../config/database.js");
const Etagere = db.etageres;

exports.create = (etagere) => {
    return Etagere.create({
        et_id: etagere.et_id,
        fk_se: etagere.fk_se,
        fk_ra: etagere.fk_ra,
        fk_mo: etagere.fk_mo,
        fk_ba: etagere.fk_ba
    })
        .then((etagere) => {
            console.log(">> Created Etagere: "+ JSON.stringify(tag, null, 2));
            return etagere;
        })
        .catch((err) => {
            console.log(">> Error while creating Etagere: ", err);
        })
};

exports.findEtagereProduits = (etagereId) => {
    return Etagere.findByPk(etagereId, { include: ["produits"] })
      .then((etagere) => {
        return etagere;
      })
      .catch((err) => {
        console.log(">> Error while finding etagere: ", err);
      });
};

exports.getSectionEtageres = (se_id) => {
  return Etagere.findAll({
    where: {
      fk_se: se_id
    }
  })
}

exports.getEtageres = (ba_id, mo_id, ra_id, se_id) => {
  return Etagere.findAll({
      where: {
          fk_ba: ba_id,
          fk_mo: mo_id,
          fk_ra: ra_id,
          fk_se: se_id
        }
  })
}

exports.getEtagere = (ba_id, mo_id, ra_id, se_id, et_id) => {
  return Etagere.findAll({
      where: {
          fk_ba: ba_id,
          fk_mo: mo_id,
          fk_ra: ra_id,
          fk_se: se_id,
          et_id: et_id
      }
  })
}