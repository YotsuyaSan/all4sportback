const database = require("../../config/database.js");
const Sequelize = require('sequelize');

async function getProducts(){
    let json = []
    await database.database.query('SELECT * FROM produits', {
        type: Sequelize.QueryTypes.SELECT
    }).then((res) => {
        res.forEach(product => {
            json.push(product)
        });
    })
    return json
}

async function getProductsByBatiment(idBatiment){
    let json = []
    await database.database.query('SELECT * FROM produits WHERE fk_ba = :idBatiment', {
        type: Sequelize.QueryTypes.SELECT,
        replacements: {idBatiment: idBatiment}
    }).then((res) => {
        res.forEach(produit => {
            json.push(produit)
        });
    })
    return json
}

async function getProductsByModule(idBatiment, idModule){
    let json = []
    await database.database.query('SELECT * FROM produits WHERE fk_ba = :idBatiment AND fk_mo = :idModule', {
        type: Sequelize.QueryTypes.SELECT,
        replacements: {
            idBatiment: idBatiment,
            idModule: idModule
        }
    }).then((res) => {
        res.forEach(produit => {
            json.push(produit)
        });
    })
    return json
}

async function getProductsByRangee(idBatiment, idModule, idRangee){
    let json = []
    await database.database.query('SELECT * FROM produits WHERE fk_ba = :idBatiment AND fk_mo = :idModule AND fk_ra = :idRangee', {
        type: Sequelize.QueryTypes.SELECT,
        replacements: {
            idBatiment: idBatiment,
            idModule: idModule,
            idRangee: idRangee
        }
    }).then((res) => {
        res.forEach(produit => {
            json.push(produit)
        });
    })
    return json
}

async function getProductsBySection(idBatiment, idModule, idRangee, idSection){
    let json = []
    await database.database.query('SELECT * FROM produits WHERE fk_ba = :idBatiment AND fk_mo = :idModule AND fk_ra = :idRangee AND fk_se = :idSection', {
        type: Sequelize.QueryTypes.SELECT,
        replacements: {
            idBatiment: idBatiment,
            idModule: idModule,
            idRangee: idRangee,
            idSection: idSection
        }
    }).then((res) => {
        res.forEach(produit => {
            json.push(produit)
        });
    })
    return json
}

async function getProductByRef(pr_reference) {
    console.log(pr_reference)
    let json = []
    await database.database.query('SELECT * FROM produits WHERE pr_reference = :pr_reference', {
        type: Sequelize.QueryTypes.SELECT,
        replacements: {
            pr_reference: pr_reference
        }
    }).then((res) => {
        res.forEach(produit => {
            json.push(produit)
        })
    })
    return json
}

async function getProductsByEtagere(idBatiment, idModule, idRangee, idSection, idEtagere){
    let json = []
    await database.database.query('SELECT * FROM produits WHERE fk_ba = :idBatiment AND fk_mo = :idModule AND fk_ra = :idRangee AND fk_se = :idSection AND fk_et = :idEtagere', {
        type: Sequelize.QueryTypes.SELECT,
        replacements: {
            idBatiment: idBatiment,
            idModule: idModule,
            idRangee: idRangee,
            idSection: idSection,
            idEtagere: idEtagere
        }
    }).then((res) => {
        res.forEach(produit => {
            json.push(produit)
        });
    })
    return json
}

module.exports = {
    getProducts,
    getProductsByBatiment,
    getProductsByModule,
    getProductsByRangee,
    getProductsBySection,
    getProductsByEtagere,
    getProductByRef
}