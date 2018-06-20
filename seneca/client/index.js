const seneca = require('seneca')();

seneca.client({ type: 'tcp', port: 1031 })

seneca.act({ role: 'calc', cmd: 'sum', a: 9, b: 70 },
        (error, result) => {
            if (error)
                console.error('Error: ', error);
            else
                console.log('Result Sum: ', result);
        })