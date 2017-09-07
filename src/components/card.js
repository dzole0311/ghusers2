import React, { Component } from 'react';

class Card extends Component {
	render() {
		let data = this.props.data;

		return (
			<div>
				<img src={data.avatar} />
				<h2>{data.realName}</h2>
				<p>aka:</p>
				<h3>{data.username}</h3>
				<p>From:</p>
				<h3>{data.location}</h3>
				<p>Repos:</p>
				<h3>{data.repos}</h3>
				<p>Followers:</p>
				<h3>{data.folloewers}</h3>
				<p>Following:</p>
				<h3>{data.following}</h3>
			</div>
		);
	}
}

export default Card;