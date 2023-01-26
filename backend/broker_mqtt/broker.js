const aedes = require('aedes')()
const server = require('net').createServer(aedes.handle)
const httpServer = require('http').createServer()
const ws = require('websocket-stream')
MQTT_Port = 8884
const wsPort = 1884
server.listen(MQTT_Port, function () {
  console.log('Aedes MQTT server started and listening on port', MQTT_Port)
}),
ws.createServer({ server: httpServer }, aedes.handle)
httpServer.listen(wsPort, function () {
  console.log('websocket server listening on port ', wsPort)
})