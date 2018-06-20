var express = require('express');
var Promise = require('bluebird');
var app = express();
var seneca = require('seneca')()
.use('seneca-amqp-transport');
// seneca.client({ type: 'tcp', port: 10101 });
seneca.client(
    {
        type: 'amqp',
        pin: 'role:calc,cmd:sum',
        url: 'amqp://guest:guest@localhost:5672/'
    }
)

// var act = Promise.promisify(seneca.act, seneca);

app.get('/', function (req, res) {
    seneca.act({ role: 'calc', cmd: 'sum', a: req.query.a, b: req.query.b },
        (err, result) => {
            res.send(result);
        }
    );
    //     console.log(req.query.a);
    //   res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});