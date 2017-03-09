// While import is indeed part of ES6, it is unfortunately not
// yet supported by any native environments, Node or browser.


const express = require('express')
const http = require('http')

const app = express()
const server = http.createServer(app)
const io = require('socket.io').listen(server)

io.on('connection', (socket) => {
	console.log('client-server connection established!')
	socket.on('client-data', (data) => {
		console.log('data from client-side received: ', data)
	})
})

server.listen('3030', () => {
	console.log('express server listening on port 3030...')
})