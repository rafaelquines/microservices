var seneca = require('seneca')()
    .use('seneca-amqp-transport')
    .use('./calc')
    .listen(
        {
            type: 'amqp',
            url: 'amqp://guest:guest@localhost:5672/',
            pin: 'role:calc,cmd:*',
        }
    );