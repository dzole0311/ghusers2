import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import Geocode from "react-geocode";

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey("AIzaSyCy8_wKA_45gUraZj4_Yp2p39Ygu68K82A");

class MapContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
	    return (
	      <Map center={this.props.centerMap} zoom={13} >
			<TileLayer
			attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
		  </Map>
	    );
	}
}

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userCoords: {
				lat: 41.9973,
				lng: 21.4280
			}
		}
	}

	fetchCoords(location) {
		Geocode.fromAddress(location).then(
		     response => {
		         const coords = response.results[0].geometry.location;

		         this.setState({
					  userCoords: {
		                 lat: coords.lat,
		                 lng: coords.lng
		             }
		         })
		     },
		     error => {
		        console.error(error);
		     }
	    );
	}

	componentDidMount() {
		let data = this.props.data;
		this.fetchCoords(data.location);
	}

	componentDidUpdate(prevProps) {
		if(this.props.data != prevProps.data) {
			let data = this.props.data;
			this.fetchCoords(data.location);
		}
	}

	render() {
		const userBio = this.props.data.bio ? (
            <div className="user-info--bio user-info--box">
                <i className="fa fa-align-left" />
                <p>{this.props.data.bio}</p>
            </div>
        ) : (
            <div className="user-info--bio user-info--box">
                <i className="fa fa-align-left" />
                <p>Prefers not to share any bio</p>
            </div>
        );

		const userFollowers = this.props.data.followers > 0 ? (
            <div className="user-info--followers user-info--box">
                <i className="fa fa-star" />
                <p>{this.props.data.login} has a total of {this.props.data.followers} followers</p>
            </div>
        ) : (
            <div className="user-info--followers user-info--box">
                <i className="fa fa-star" />
                <p>Unfortunately, the user is not that famous to be followed</p>
            </div>
        );

		const userFullName = this.props.data.name !== '' ? (
            <div className="user-info--fullname user-info--box">
                <i className="fa fa-user-circle" />
                <p>During daylight, the user is known as {this.props.data.name}</p>
            </div>
        ) : (
            <div className="user-info--following user-info--box">
                <i className="fa fa-users" />
                <p>The user wants to keep their full name private for some reason</p>
            </div>
        );

		const userFollowing = this.props.data.following > 0 ? (
            <div className="user-info--following user-info--box">
                <i className="fa fa-users" />
                <p>{this.props.data.login} follows {this.props.data.following} people</p>
            </div>
        ) : (
            <div className="user-info--following user-info--box">
                <i className="fa fa-users" />
                <p>{this.props.data.login} does not want to follow the herd. Awesome!</p>
            </div>
        );

		const userLocation = this.props.data.location ? (
            <div className="user-info--followers user-info--box">
                <i className="fa fa-compass" />
                <p>Usually seen around {this.props.data.location}</p>
            </div>
        ) : (
            <div className="user-info--followers user-info--box">
                <i className="fa fa-compass" />
                <p>No address? Suspicious.</p>
            </div>
        );

		return (
			<main className="main-card">
				<div className="main-card--header-bg">
					<MapContainer centerMap={this.state.userCoords}/>
				</div>

				<div className="main-card--user-info">
					<div className="main-card--img-container">
						<img src={this.props.data.avatar} />
					</div>

					<div className="user-info--name user-info--box">
						<i className="fa fa-github" />
						<p>{this.props.data.login}</p>
					</div>

					{userFullName}

					{userBio}

					{userLocation}

					{userFollowers}

					{userFollowing}
				</div>
			</main>
		);
	}
}

export default Card;
