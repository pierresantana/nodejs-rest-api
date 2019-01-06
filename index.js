const config = require('./config/config.env');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const Routers = require('./api/routes');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type');
    if (req.method === 'OPTIONS') {
        return res.send(200);
    } else {
        return next();
    }
});

app.use(bodyParser.json());
Routers(app);

app.listen(config.port, function () {
    console.log('running server at port http://localhost:%s', config.port);
});