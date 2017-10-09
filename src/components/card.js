import React, { Component } from 'react';
import { Image, Grid, Row, Col } from 'react-bootstrap';

class Card extends Component {
	render() {
		let data = this.props.data;

		return (
			<Row className='justify-content-center'>
				<Col xs={12} md={12}>
					<Col className='userContainer' md={4} mdOffset={4}>
						<Image className='box bar img-responsive' md={2} xs={12} src={data.avatar} circle/>
						<h4 className='text-center'>{data.realName}</h4>
						<p className='text-center'>aka:</p>
						<h4 className='text-center'>{data.username}</h4>
						<p className='text-center'>From:</p>
						<h4 className='text-center'>{data.location}</h4>
						<p className='text-center'>Repos:</p>
						<h4 className='text-center'>{data.repos}</h4>
						<p className='text-center'>Followers:</p>
						<h4 className='text-center'>{data.followers}</h4>
						<p className='text-center'>Following:</p>
						<h4 className='text-center'>{data.following}</h4>
					</Col>
				</Col>
			</Row>
		);
	}
}

export default Card;
