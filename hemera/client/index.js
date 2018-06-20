const Hemera = require('nats-hemera')
const nats = require('nats').connect("nats://localhost:4222")

const hemera = new Hemera(nats, {
  logLevel: 'info'
})

hemera.ready(() => {
  hemera.act(
    {
      topic: 'math',
      cmd: 'add',
      a: 1,
      b: 2
    },
    function(err, resp) {
      this.log.info(resp, 'Result')
    }
  )
})