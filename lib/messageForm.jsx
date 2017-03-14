'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

export default class MessageForm extends React.Component {
	render () {
		return (
			<div className="messageForm">
				<input id="message"/>
				<button>Send</button>
			</div>
		)
	}
}

// ReactDOM.render(
// 	<MessageForm />,
// 	document.getElementById('reactChatApp')
// )