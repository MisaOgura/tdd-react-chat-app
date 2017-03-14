'use strict'

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import UsernameForm from '../lib/usernameForm'

describe('usernameForm -', () => {
	
	const testUsernameForm = shallow(<UsernameForm />)
	
	it('should have a div with a className = usernameForm', () => {
  	expect(testUsernameForm.find('div').hasClass('usernameForm')).to.equal(true)
	})
	
  it('should have an input form', () => {
  	expect(testUsernameForm.find('input')).to.have.length(1)
  })
})

// NB - the 1st letter of React component MUST be an uppercase as otherwise
//      it's transformed into React.createElement('myComponent', ...)
// https://github.com/facebook/react/issues/4695