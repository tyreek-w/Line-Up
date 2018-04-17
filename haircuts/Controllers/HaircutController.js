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
    async postUserHaircut (req, res) {
        let Haircut = dbmain.model("Haircut");
        let User = dbmain.model("User");
        let BarberHaircut = dbmain.model('BarberHaircut');
        let beard;
        if(req.body.beard === "no"){
            beard = false;
        }
        if(req.body.beard === "yes"){
            beard = true;
        }
        try {
            Haircut.create({
                id: req.body.id,
                price: req.body.price,
                duration: req.body.duration,
                UserId: req.body.UserId,
                BarberHaircutId: req.body.BarberHaircutId,
                length: req.body.length,
                Beard: beard
            })
                .then(haircut => {
                    res.send(haircut)
                })
        } catch(err) {
            console.log(err);
            res.status(500).send({
                error: 'An error has occurred trying to create haircut' + err
            })
        }
    },
    async getLikes (req, res) {
        let BarberHaircutReview = dbmain.model("BarberHaircutReview");
        let Review = dbmain.model("Review");

        BarberHaircutReview.findById(req.body.BarberHaircutId)
            .then((haircutReview) => {
                Review.findAll({
                    where: {
                        id: haircutReview.ReviewId,
                        Like: true
                    }
                })
                    .then((reviews) => {
                        res.status(200).send(reviews.length);
                    })
            })
    },
    async getComments (req, res) {
        let BarberHaircutReview = dbmain.model("BarberHaircutReview");
        let Review = dbmain.model("Review");

        BarberHaircutReview.findById(req.body.BarberHaircutId)
            .then((haircutReview) => {
                Review.findAll({
                    where: {
                        id: haircutReview.ReviewId,
                        Comment: {
                            //look for all reviews where comment is not null
                            $ne: null
                        }
                    }
                })
                    .then((reviews) => {
                        res.status(200).send(reviews);
                    })
            })
    },
};