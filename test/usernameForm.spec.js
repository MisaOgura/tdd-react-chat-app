'use strict'

import React from 'react'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'

import usernameForm from '../lib/usernameForm'

describe.only('usernameForm -', () => {
	
	const testUsernameForm = mount(<usernameForm />)
	
	it('should have a div with a className = usernameForm', () => {
		console.log(testUsernameForm.html())
		expect(testUsernameForm.find('.something')).to.have.length(1)
	})
	
  // it('should have an input form', () => {
  // 	expect(testUsernameForm.find('input').length).to.equal(1)
  // })
})
