'use strict'

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import MessageForm from '../lib/messageForm'

describe('MessageForm - ', () => {
	
	const testMessageForm = shallow(<MessageForm />)
  
	it('should have a div with className = messageForm', () => {
  	expect(testMessageForm.find('div').hasClass('messageForm')).to.equal(true)
  })
	
	it('should contain an input field with className = message', () => {
		const messageInputField = testMessageForm.find('input#message')
		expect(messageInputField).to.have.length(1)
	})
	
	it('should have a send button', () => {
		const sendButton = testMessageForm.find('button')
		expect(sendButton).to.have.length(1)
		expect(sendButton.text()).to.equal('Send')
	})
	
	// it('should have props for username and messages', () => {
	// })
	//
	// it('should have props for handleMessageSubmit', () => {
	// })
})