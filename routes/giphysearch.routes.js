module.exports = app => {

    const giphysearch = require("../controllers/giphysearch.controller");

    var router = require("express").Router();

    // Create a new Business
    router.get("/", giphysearch.home);

    router.get("/searchGiphy", giphysearch.search);

    app.use('/', router);
}
