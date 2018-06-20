const Hemera = require('nats-hemera')
const nats = require('nats').connect("nats://localhost:4222")

const hemera = new Hemera(nats, {
  logLevel: 'info'
})

hemera.ready(() => {
  hemera.add(
    {
      topic: 'calc',
      cmd: 'sum'
    },
    function(req, cb) {
      cb(null, req.a + req.b)
    }
  )
})