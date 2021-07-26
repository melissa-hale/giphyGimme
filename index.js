// instantiate app
const express = require('express');
const app = express();

// set up logger for dev
if (!process.env.NODE_ENV) {
    const logger = require('morgan');
    app.use(logger('dev'));
};

// set default view engine
app.set('view engine', 'ejs');

////// come back to this later
// set up helmet to add appropriate HTTP headers
// in prod only
// if (process.env.NODE_ENV) {
//     const helmet = require('helmet');
//     app.use(helmet());
// };
//////

// set up compression
const compression = require('compression');
app.use(compression());

// ROUTES
require("./routes/giphysearch.routes")(app);

// start a listenin
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
