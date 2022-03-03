const Sequelize = require('sequelize')
const db = require("../../config/database.js");
const Batiment = db.batiments;

async function getBatiments(){
  let json = []
  await db.database.query('SELECT * FROM batiments', {
    type: Sequelize.QueryTypes.SELECT
  }).then((res) => {
    res.forEach(batiment => {
      json.push(batiment)
    });
  })
  return json
}

module.exports = {
  getBatiments
}