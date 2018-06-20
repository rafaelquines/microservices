"use strict"

const { ServiceBroker } = require("moleculer");
let broker = new ServiceBroker(
    {
        logger: console,
        // transporter: "nats://localhost:4222",
        // transporter: {
        //     type: 'TCP',
        //     port: 10101
        // }
        transporter: "amqp://localhost:5672/"
    }
);



broker.createService({
    name: "calc",
    actions: {
        sum(ctx) {
            return Number(ctx.params.a) + Number(ctx.params.b);
        }
    }
});
broker.start();