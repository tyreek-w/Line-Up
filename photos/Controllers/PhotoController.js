'use strict';
const dbmain = require('../../config/DB/DBmain');

module.exports = {
    async index (req, res) {
        let query = {};
        if(!(req.params.barberId === undefined)){
            query.BarberId = req.params.barberId;
        }
        if(!(req.params.userId === undefined)){
            query.UserId = req.params.userId;
        }
        if(!(req.params.haircutId === undefined)){
            query.HaircutId = req.params.haircutId;
        }
        let Photo = dbmain.model("Photo");
        try {
            Photo.findAll({
                where: query,
                limit: 20
            }).then(photos => {
                res.send(photos)
            });
        } catch(err) {
            res.status(500).send({
                error: 'An error has occurred trying to fetch songs' + err
            })
        }
    },
    async post (req, res) {
        let Haircut = dbmain.model("Haircut");
        let User = dbmain.model("User");
        let Barber = dbmain.model('Barber');
        let Photo = dbmain.model('Photo');
        Photo.belongsTo(Haircut);
        Photo.belongsTo(User);
        Photo.belongsTo(Barber);
        try {
            Photo.create({
                id: req.body.id,
                imgUrl: req.body.imgUrl,
                UserId: parseInt(req.params.userId) || null,
                BarberId: parseInt(req.params.barberId) || null,
                HaircutId: parseInt(req.params.haircutId) || null
            })
                .then(photo => {
                    res.send(photo)
                })
        } catch(err) {
            res.status(500).send({
                error: 'An error has occurred trying to create haircut' + err
            })
        }
    }
};