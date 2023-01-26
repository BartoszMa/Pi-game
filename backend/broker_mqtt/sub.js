const mqtt = require('mqtt')
const client = mqtt.connect('ws://localhost:1884')
const topic = 'kot'

client.on('message', (topic, message) => {
    message = message.toString()
    console.log(message)
})

client.on('connect', () => {
    client.subscribe(topic)
})
