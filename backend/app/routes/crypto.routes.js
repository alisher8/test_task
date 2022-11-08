module.exports = app => {

    const tutorials = require("../controllers/crypto.controller.js");

    var router = require("express").Router();

    router.get("/", tutorials.findAll);

    app.use('/', router);
};