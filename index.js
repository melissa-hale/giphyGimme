// instantiate app
const express = require('express');
const app = express();

// set up logger
if (!process.env.NODE_ENV) {
    const logger = require('morgan');
    app.use(logger('dev'));
};

// set up static path
app.use(express.static(__dirname + '/public'));

// set default view engine
app.set('view engine', 'ejs');

// ROUTES
require("./routes/giphysearch.routes")(app);

// start a listenin
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
