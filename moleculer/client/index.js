"use strict"

const { ServiceBroker } = require("moleculer");
let broker = new ServiceBroker(
    {
        logger: console,
        transporter: "amqp://localhost:5672/"
    }
);
broker.start()
    // Call service
    .then(() => broker.call("calc.sum", { a: 5, b: 3 }))
    .then(res => console.log("5 + 3 =", res))
    .catch(err => console.error(`Error occured! ${err.message}`));