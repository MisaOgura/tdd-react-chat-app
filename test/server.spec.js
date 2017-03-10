'use strict'

import { expect } from 'chai'

const port = '3030'
const url = 'http://localhost:' + port

const io = require('socket.io-client')

describe('Socket server -', () => {
	let server
	const options = { forceNew: true }
	
	beforeEach((done) => {
	  // start up the server
	  require('../server')
		done()
	})
	
	it('should echo messages from the client, back to client', (done) => {
		const client = io.connect(url, options)
		const testMessage = 'test message from client'
		
		client.on('connect', () => {
			
			// client is listening on an echo event from the server
			client.on('echo', (message) => {
				expect(message).to.equal(testMessage)
				client.disconnect()
				done()
			})
			
			// client emits an echo event, and server sends it right back
			// as an echo event from the server
			client.emit('echo', testMessage)
		})
  })
})