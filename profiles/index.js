"use strict";
import User from "./user";

import express from "express";

import Barber from "./barber";

const router = express.Router();

let joe = new User.User({
    firstName: 'joe',
    lastName: 'ivb',
    birthdate: 'birthday',
    email: "email",
    phoneNumber: 'phonenumber',
    city: "city",
    state: 'state',
    country: "country"
}, true);

joe.update("firstName", "Emen");


let joeBarber = {};
joeBarber = new Barber(
    joe, {
        username: "snazzyMan"
    }
);

router.get("/", function (req, res) {
    res.json(joeBarber);
});

module.exports = router;
