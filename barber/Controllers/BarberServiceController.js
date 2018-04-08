'use strict';
const dbmain = require('../../config/DB/DBmain');

module.exports = {
    async index (req, res) {
        let query = { id: req.session.barber.id};
        if(!(req.params.userId === undefined)){
            query.UserId = req.params.userId;
        }
        let Barber = dbmain.model("Barber");
        let Haircut = dbmain.model("Haircut");
        let Photo = dbmain.model("Photo");
        try {
            Barber.findAll({
                where: query,
                limit: 30,
                include: [
                    {
                        model: Haircut,
                        model: Photo
                    }
                ]
            }).then(barbers => {
                const resObj = barbers.map(barber => {
                    return Object.assign({},
                        {
                            barberId: barber.id,

                        })
                })
            });
        } catch(err) {
            res.status(500).send({
                error: 'An error has occurred trying to fetch songs' + err
            })
        }
    }
};