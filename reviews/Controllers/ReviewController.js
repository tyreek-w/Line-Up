const dbmain = require('../../config/DB/DBmain');

module.exports =  {
    async index (req, res) {
        let query = {};
        if(!(req.params.reviewId === undefined)){
            query.id = req.params.reviewId;
        }
        if(!(req.params.barberId === undefined)){
            query.BarberId = req.params.barberId;
        }
        if(!(req.params.userId === undefined)){
            query.UserId = req.params.userId;
        }
        if(!(req.params.barbershopId === undefined)){
            query.BarberShopId = req.params.barbershopId;
        }
        if(!(req.params.haircutId === undefined)){
            query.HaircutId = req.params.userId;
        }
        if(req.body.getComments){query.Comment = { $ne: null }}
        if(req.body.getLikes){query.Like = { $ne: null }}
        if(req.body.getRatings){query.Rating = { $ne: null }}
        let Review = dbmain.model("Review");
        try {
            Review.findAll({
                where: query,
                limit: 20
            }).then(reviews => {
                res.send(reviews)
            });
        } catch(err) {
            res.status(500).send({
                error: 'An error has occurred trying to fetch songs' + err
            })
        }
    },

    async post (req, res) {
        let Haircut = dbmain.model("Haircut");
        let Barber = dbmain.model('Barber');
        let Barbershop = dbmain.model('BarberShop');
        let Review = dbmain.model("Review");

        Review.belongsTo(Barbershop);
        Review.belongsTo(Haircut);
        Review.belongsTo(Barber);

        let like = null;
        if(req.body.like){
            like = true;
        }
        try {
            Review.create({
                id: req.body.id,
                price: req.body.price,
                duration: req.body.duration,
                HaircutId: parseInt(req.params.haircutId) || null,
                BarberId: parseInt(req.params.barberId) || null,
                BarberShopId: parseInt(req.params.barberId) || null,
                Like: like,
                Comment: req.body.comment || null,
                Rating: parseFloat(req.body.rating) || null,
            })
                .then(review => {
                    res.send(review)
                })
        } catch(err) {
            res.status(500).send({
                error: 'An error has occurred trying to create haircut' + err
            })
        }
    }
};