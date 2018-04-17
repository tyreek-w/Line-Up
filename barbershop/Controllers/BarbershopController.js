'use strict';
const dbmain = require('../../config/DB/DBmain');

module.exports = {
    async index (req, res) {
        // let query = null;
        // if(req.params.barbershopId){
        //     query = { id: req.body.barbershopId};
        // }
        let Barbershop = dbmain.model("BarberShop");
        // let Barber = dbmain.model("Barber");
        // let Photo = dbmain.model("Photo");
        // let Service = dbmain.model("Service");
        try {
            Barbershop.findAll({
                limit: 30
            }).then(barbershops => {
                res.json(barbershops);
            });
        } catch(err) {
            res.status(500).send({
                error: 'An error has occurred trying to fetch songs' + err
            })
        }
    }
};