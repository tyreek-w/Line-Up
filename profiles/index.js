use "strict";
import User from "./user";

import express from "express";

import Barber from "./barber";

const router = new express.Router();

let joe = new User.User({
  firstName: 'joe',
  lastName: 'ivb',
  birthdate: 'birthday',
  email: "email",
  phoneNumber: 'phonenumber',
  city: "city",
  state: 'state',
  country: 'country'
}, true);

joe.update("firstName", "Emen");

let joeBarber = new Barber(
  joe, {
    username: 'snazzyMan'
  }
);

router.get("/", function(req, res) {
  let words = req.name;
  res.send(words);
});

export default router;
