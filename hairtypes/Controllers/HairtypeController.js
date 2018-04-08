'use strict';
const dbmain = require('../../config/DB/DBmain');

module.exports = {
    async index (req, res) {
        let Hairtype = dbmain.model("Hairtype");
        let query = {}
        if(req.query.position){query.position = req.query.position}
        if(req.query.type){query.type = req.query.type}
        if(req.query.length){query.length = req.query.length}
        try {

            Hairtype.findAll({
                where: query
            }).then(hairtypes => {
                res.send(hairtypes)
            });
        } catch(err) {
            res.status(500).send({
                error: 'An error has occurred trying to fetch songs' + err
            })
        }
    },
};