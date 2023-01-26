const mqtt = require('mqtt')
const client = mqtt.connect('ws://localhost:1884')

const topic = 'kot'
const message = 'test'

client.on('connect', () => {
    setInterval(() => {
        client.publish(topic, message)
        console.log('message sent', message)
    }, 5000)
})
