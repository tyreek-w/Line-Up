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
        let Haircut = dbmain.model("Haircut");
        try {
            Haircut.findAll({
                where: query,
                limit: 20
            }).then(haircuts => {
                res.send(haircuts)
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
        let Hairtype = dbmain.model('Hairtype');
        Haircut.belongsTo(Hairtype);
        Haircut.belongsTo(User);
        Haircut.belongsTo(Barber);
        try {
            Haircut.create({
                id: req.body.id,
                price: req.body.price,
                duration: req.body.duration,
                UserId: parseInt(req.params.userId) || null,
                BarberId: parseInt(req.params.barberId) || null
            })
                .then(haircut => {
                    res.send(haircut)
                })
        } catch(err) {
            res.status(500).send({
                error: 'An error has occurred trying to create haircut' + err
            })
        }
    }
};