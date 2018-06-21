const seneca = require('seneca')()
.use('seneca-amqp-transport');

seneca.client(
    {
        type: 'amqp',
        url: 'amqp://guest:guest@localhost:5672/',
        pin: 'role:calc,cmd:*',
    }
    // { type: 'tcp', port: 1031 }
);

seneca.act({ role: 'calc', cmd: 'sum', a: 9, b: 70 },
        (error, result) => {
            if (error)
                console.error('Error: ', error);
            else
                console.log('Result Sum: ', result);
        })