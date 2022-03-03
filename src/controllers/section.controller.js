const db = require("../../config/database.js");
const Section = db.sections;

exports.create = (section) => {
    return Section.create({
        se_id: section.se_id,
        fk_ra: section.fk_ra,
        fk_mo: section.fk_mo,
        fk_ba: section.fk_ba
    })
        .then((section) => {
            console.log(">> Created Section: "+ JSON.stringify(tag, null, 2));
            return section;
        })
        .catch((err) => {
            console.log(">> Error while creating Section: ", err);
        })
};

exports.findSectionProduits = (sectionId) => {
    return Section.findByPk(sectionId, { include: ["produits"] })
      .then((section) => {
        return section;
      })
      .catch((err) => {
        console.log(">> Error while finding section: ", err);
      });
};

exports.getRangeeSections = (ra_id) => {
  return Section.findAll({
    where: {
      fk_ra: ra_id
    }
  })
}

exports.getSections = (ba_id, mo_id, ra_id) => {
  return Section.findAll({
      where: {
          fk_ba: ba_id,
          fk_mo: mo_id,
          fk_ra: ra_id
      }
  })
}

exports.getSection = (ba_id, mo_id, ra_id, se_id) => {
  return Section.findAll({
      where: {
          fk_ba: ba_id,
          fk_mo: mo_id,
          fk_ra: ra_id,
          fk_se: se_id
      }
  })
}