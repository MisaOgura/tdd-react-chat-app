// While import is indeed part of ES6, it is unfortunately not
// yet supported by any native environments, Node or browser.

const express = require('express')
const http = require('http')

const app = express()
const server = http.createServer(app)
const io = require('socket.io').listen(server)

const port = '3030'

io.on('connection', (socket) => {
	console.log('client-server connection established')
	socket.on('echo', (message) => {
		console.log('message from client received: ', message)
		socket.emit('echo', message)
	})
})

server.listen(port, () => {
	console.log('express server listening on port ' + port + '...')
})