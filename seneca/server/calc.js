"use strict";

module.exports = function calc(options) {
    var seneca = this;

    var suffix = '';

    seneca.add({ role: 'calc', cmd: 'sum' }, sum);
    seneca.add({ role: 'calc', cmd: 'subtract' }, subtract)
    seneca.add({ role: 'calc', cmd: 'division' }, division)
    seneca.add({ role: 'calc', cmd: 'multiply' }, multiply)

    seneca.add('init:calc', init)

    function sum(args, done) {
        seneca.log.info("sum");
        done(null, { answer: parseInt(args.a) + parseInt(args.b) });
    }

    function subtract(args, done) {
        seneca.log.info("subtract");
        done(null, { answer: args.a - args.b });
    }

    function division(args, done) {
        seneca.log.info("division");
        done(null, { answer: args.a / args.b });
    }

    function multiply(args, done) {
        seneca.log.info("multiply");
        done(null, { answer: args.a * args.b });
    }

    function init(args, done) {
        var seneca = this
        // seneca.log.info("Initializing...");
        done();
    }

}