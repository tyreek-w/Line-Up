"use strict";

import express from "express";

const router = express.Router();

router.get("/", function (req, res) {
    console.log("request receivednpm ");
});

module.exports = router;
